import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { app } from "../firebase/firebase.config";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UpdatePost = () => {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const navigate = useNavigate();
  const { postId } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  // fetching data based on id
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/post/getposts?postId=${postId}`);
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
        setPublishError(data.message);
        return;
      }
      if (res.ok) {
        setPublishError(null);
        setFormData(data.posts[0]);
      }
    };
    fetchData();
  }, [postId]);

  // image upload function
  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError("Please Select An Image");
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError("Image Uploading Failed", error);
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadUrl });
          });
        }
      );
    } catch (error) {
      setImageUploadError("Image Upload Failed");
      setImageUploadProgress(null);
      console.error("Image Uploading Error", error);
    }
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Current User:", currentUser);
    try {
      const res = await fetch(
        `https://blog-server-one-theta.vercel.app/api/post/updatepost/${formData._id}/${currentUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
      if (res.ok) {
        setPublishError(null);
        navigate(`/view-post/${data.updatedPost.slug}`);
      }
    } catch (error) {
      setPublishError("Something Went Wrong", error.message);
    }
  };
  return (
    <div className="h-full p-3 max-w-3xl mx-auto">
      <h1 className="text-center text-3xl capitalize my-7 font-semibold">
        Update Post
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* title and category selector */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <TextInput
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            value={formData.title}
          />
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="uncategorized">Select A Category</option>
            <option value="javascript">JavaScript</option>
            <option value="reactjs">React JS</option>
            <option value="nextjs">Next JS</option>
            <option value="nodejs">Node JS</option>
            <option value="expressjs">Express JS</option>
          </Select>
        </div>
        {/* file upload and text editor */}
        <div className="flex items-center gap-4 justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            typeof="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            onClick={handleUploadImage}
            type="button"
            gradientDuoTone={"purpleToBlue"}
            size={"sm"}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              "Upload Image"
            )}
          </Button>
        </div>
        {/* show image upload error */}
        {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}
        {formData.image && (
          <img
            src={formData.image}
            alt="Blog Image"
            className="w-full h-72 object-cover"
          />
        )}
        <ReactQuill
          onChange={(value) => setFormData({ ...formData, content: value })}
          theme="snow"
          placeholder="Write Here"
          className="h-72 mb-12"
          required
          value={formData.content}
        />
        <Button type="submit" gradientDuoTone={"purpleToBlue"}>
          Update
        </Button>
        {publishError && (
          <Alert color="failure" className="mt-5">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
};

export default UpdatePost;
