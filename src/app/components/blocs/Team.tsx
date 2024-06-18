import { Pin } from "../ui/3d-pin";

const Team: React.FC = () => {
  return (
    <div className="flex flex-col mx-auto py-12">
      <h2 className="text-5xl font-bold pt-16 mb-8 text-black text-center">
        MEET THE TEAM
      </h2>
      <div className="flex overflow-x-auto w-full">
        <div className="h-[30rem] flex w-full max-w-full space-x-4 lg:justify-center">
          <div className="flex-shrink-0 flex items-center justify-center">
            <Pin
              title="Instagram"
              href="https://www.instagram.com/steventuition/"
              imgSrc="https://res.cloudinary.com/dzjr3skhe/image/upload/v1710442045/mbsgkhiciqsoczckxy6b.png"
              className="your-class"
              ClassName="your--class"
            >
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem]">
                <h3 className="font-bold text-base text-slate-100">
                  King Steve
                </h3>
                <div className="text-base font-normal text-slate-500">
                  Mentuition Podcast Host - Destination Consultant
                </div>
                <div className="flex-1 mt-4 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dzjr3skhe/image/upload/v1718500869/Screenshot_2024-06-15_at_9.05.52_PM_upwzih.png"
                    alt="King Steve"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Pin>
          </div>

          <div className="h-[30rem] flex-shrink-0 flex items-center justify-center">
            <Pin
              title="Instagram"
              href="https://www.instagram.com/albrbinasec/"
              imgSrc="https://res.cloudinary.com/dzjr3skhe/image/upload/v1718505636/tmp-2936-1707164460359_omc3fg.jpg"
              className="your-class"
              ClassName="your--class"
            >
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem]">
                <h3 className="font-bold text-base text-slate-100">
                  Internation AL
                </h3>
                <div className="text-base font-normal text-slate-500">
                  Mentuition Podcast Host - Destination Consultant
                </div>
                <div className="flex-1 mt-4 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dzjr3skhe/image/upload/v1718505636/tmp-2936-1707164460359_omc3fg.jpg"
                    alt="Internation AL"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Pin>
          </div>

          <div className="h-[30rem] flex-shrink-0 flex items-center justify-center">
            <Pin
              title="Instagram"
              href="https://www.instagram.com/iamhectorjesus/"
              imgSrc="https://res.cloudinary.com/dzjr3skhe/image/upload/v1718500869/Screenshot_2024-06-15_at_9.13.56_PM_syymrb.png"
              className="your-class"
              ClassName="your--class"
            >
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem]">
                <h3 className="font-bold text-base text-slate-100">Hector</h3>
                <div className="text-base font-normal text-slate-500">
                  The Parallel Perspective Podcast Host
                </div>
                <div className="flex-1 mt-4 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dzjr3skhe/image/upload/v1718500869/Screenshot_2024-06-15_at_9.13.56_PM_syymrb.png"
                    alt="Hector"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Pin>
          </div>

          <div className=" h-[30rem] flex-shrink-0 flex items-center justify-center">
            <Pin
              title="Github"
              href="https://github.com/alantothe"
              imgSrc="https://res.cloudinary.com/dzjr3skhe/image/upload/v1710442045/mbsgkhiciqsoczckxy6b.png"
              className="your-class"
              ClassName="your--class"
            >
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem]">
                <h3 className="font-bold text-base text-slate-100">Alan</h3>
                <div className="text-base font-normal text-slate-500">
                  Software Engineer - Lima Street Clips
                </div>
                <div className="flex-1 mt-4 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dzjr3skhe/image/upload/v1710442045/mbsgkhiciqsoczckxy6b.png"
                    alt="Alan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Pin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
