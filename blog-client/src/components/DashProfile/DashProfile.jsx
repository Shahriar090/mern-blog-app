import { Button, TextInput } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-0">
      <h1 className="text-center my-8 text-3xl font-semibold">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="img w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
          <img
            src={currentUser.profilePicture}
            alt="User_Img"
            className="rounded-full w-full h-full border-8 object-cover border-[lightgray]"
          />
        </div>
        {/* text input */}
        {/* user name */}

        <TextInput
          type="text"
          id="userName"
          placeholder="User Name"
          defaultValue={currentUser.userName}
        />
        {/* email */}
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
        />
        {/* password */}
        <TextInput type="password" id="password" placeholder="Enter Password" />

        <Button type="submit" gradientDuoTone="purpleToBlue" outline>
          Update
        </Button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-500 cursor-pointer">SignOut</span>
        <span className="text-red-500 cursor-pointer">Delete Account</span>
      </div>
    </div>
  );
};

export default DashProfile;
