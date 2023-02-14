import React from "react";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
  HeartIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";

export default function Sidebar() {
  return (
    <div className="text-gray-500  p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5 " />
          <p className="">Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <MagnifyingGlassIcon className="h-5 w-5 " />
          <p className="">Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <BuildingLibraryIcon className="h-5 w-5 " />
          <p className="">Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* section 2 */}
        <button className="flex items-center space-x-2 hover:text-white">
          <PlusIcon className="h-5 w-5 " />
          <p className="">create playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5 " />
          <p className="">Like Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5 " />
          <p className="">your episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        {/* playlist */}
        <p className="cursor-pointer hover:text-white"> playlist name ...</p>
        <p className="cursor-pointer hover:text-white"> playlist name ...</p>
        <p className="cursor-pointer hover:text-white"> playlist name ...</p>
        <p className="cursor-pointer hover:text-white"> playlist name ...</p>
        <p className="cursor-pointer hover:text-white"> playlist name ...</p>
        <p className="cursor-pointer hover:text-white"> playlist name ...</p>
        <p className="cursor-pointer hover:text-white"> playlist name ...</p>
        <p className="cursor-pointer hover:text-white"> playlist name ...</p>
        <p className="cursor-pointer hover:text-white"> playlist name ...</p>
      </div>
    </div>
  );
}
