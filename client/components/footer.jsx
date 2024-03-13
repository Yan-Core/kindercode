import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { Github } from "lucide-react";
export default function Footer() {
  return (
    <footer className="pt-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Divider />
        <div className="flex justify-between items-center py-10">
          <p className="font-light">
            Made by{" "}
            <a
              href="https://github.com/abyanmajid"
              target="_blank"
              className="font-medium"
            >
              Abyan Majid
            </a>
          </p>
          <a href="https://github.com/abyanmajid/kindercode" target="_blank">
            <Button isIconOnly variant="light">
              <Github size={24} />
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
}
