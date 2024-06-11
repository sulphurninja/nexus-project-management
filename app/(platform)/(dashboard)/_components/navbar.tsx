import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";
import { FormPopover } from "@/components/form/form-popover";

export const Navbar = () => {
  return (
    <nav className="h-14 w-full pr-2 md:px-4 flex items-center shadow-md fixed top-0 z-50 bg-[#FEFEFE] ">
      <MobileSidebar />
      <div className="flex items-center gap-x-1 sm:gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <FormPopover align="start"  side="bottom" sideOffset={18}>
          <Button
            size={"sm"}
            variant={"primary"}
            className="rounded-sm hidden  bg-red-800 text-white md:block h-auto py-1.5 px-0.5 sm:px-2"
          >
            Create
          </Button>
        </FormPopover>
        <FormPopover>
          <Button
            variant={"primary"}
            className="flex items-center justify-center p-0 h-6 w-6 md:hidden rounded-sm"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </FormPopover>
      </div>
      <div className="flex items-center bg text-white textw ml-auto gap-x-2">
        <div className=" px-2  rounded">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={"/organization/:id"}
          afterLeaveOrganizationUrl={"/select-org"}
          afterSelectOrganizationUrl={"/organization/:id"}
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                color:"white",
                alignItems: "center",
                justifyContent: "center",
              },
              
            },
          }}
        />
        </div>
      
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
};
