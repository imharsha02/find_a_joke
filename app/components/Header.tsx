import React from "react";
import { TypographyH1 } from "./Typography/TypographyH1";
import { Input } from "@/components/ui/input";


const Header = () => {
  return (
    <div className="flex items-center w-full bg-blue-500 justify-center mx-auto">
      <TypographyH1 className="w-full">Find A Joke</TypographyH1>
        <Input placeholder="Find a joke" type="text" className="mr-3 w-max"/>
    </div>
  );
};

export default Header;
