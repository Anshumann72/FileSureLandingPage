import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Header from "./Header";

const Hero = () => {
  return (
    <div>
      <Menubar className="bg-white-500 flex justify-between items-center py-10 px-4 rounded-2xl mr-16 ml-16 mt-8 shadow-2xl">
        <div className="flex items-center">
          <img src="/assets/LOGO.png" alt="Logo" className="h-12 w-18" />
        </div>

        <div className="flex justify-center items-center space-x-4">
          <MenubarMenu>
            <MenubarTrigger>Services</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Option 1</MenubarItem>
              <MenubarItem>Option 2</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Media</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Option 1</MenubarItem>
              <MenubarItem>Option 2</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Cases</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Option 1</MenubarItem>
              <MenubarItem>Option 2</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>FAQ</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Option 1</MenubarItem>
              <MenubarItem>Option 2</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Contacts</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Option 1</MenubarItem>
              <MenubarItem>Option 2</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </div>

        <div className="flex items-center space-x-4 text-white">
          <span className="text-green-500">Email: info@example.com</span>
          <span className="text-green-500">Phone: +123 456 7890</span>
        </div>
      </Menubar>
    </div>
  );
};

export default Hero;
