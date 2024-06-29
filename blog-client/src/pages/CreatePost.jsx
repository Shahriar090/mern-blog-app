import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  return (
    <div className="h-screen p-3 max-w-3xl mx-auto">
      <h1 className="text-center text-3xl capitalize my-7 font-semibold">
        Create a post
      </h1>
      <form className="flex flex-col gap-4">
        {/* title and category selector */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
          />
          <Select>
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
          <FileInput typeof="file" accept="image/*" />
          <Button type="button" gradientDuoTone={"purpleToBlue"} size={"sm"}>
            Upload Image
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write Here"
          className="h-72 mb-12"
          required
        />
        <Button type="button" gradientDuoTone={"purpleToBlue"}>
          Publish
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
