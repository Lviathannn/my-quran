import { Footer } from "flowbite-react";

type Props = {};

export default function FlowFooter({}: Props) {
   return (
      <Footer className="h-20 sm:pl-20" container={true}>
         <div className="w-full text-center">
            <Footer.Copyright href="#" by="My Qur'an" year={2023} />
         </div>
      </Footer>
   );
}
