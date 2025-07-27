import InspireLogo from "../assets/Inspire_logo.png";
import leftBackground from "../assets/9ff212b8-1868-49b0-be5c-ab2018861a9e.png";
import rightBackground from "../assets/04b69aee-2039-421b-a265-f928c2adc47e.png";

import PersonalInfoCard from "@/components/onboardingComponents/PersonalInfoCard";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import FamilyDetailsCard from "@/components/onboardingComponents/FamilyDetailsCard";
import NationalityCard from "@/components/onboardingComponents/NationalityCard";
import CultureLanguageCard from "@/components/onboardingComponents/CultureLanguageCard";
import { rootSchema } from "@/schemas/onboardingSchemas/rootSchema";
import { zodResolver } from "@hookform/resolvers/zod";
export default function Onboarding() {
  const methods = useForm({
    resolver: zodResolver(rootSchema),
    defaultValues: {
      personalInfo: {
        title: undefined,
        fullNameEnglish: "",
        fullNameOriginal: "",
        dob: "",
        placeOfBirth: "",
      },
      nationality: {
        countryOfBirth: undefined,
        currentNationality: undefined,
        secondNationality: undefined,
      },
      cultureLanguage: {
        religion: undefined,
        spokenLanguages: [],
      },
      familyDetails: {
        fatherName: "",
        motherName: "",
        familyMemberInInspire: undefined,
        maritalStatus: undefined,
      },
    },
  });
  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    console.log("Personal Info:", data.personalInfo);
    console.log("formValues:", methods.getValues());
  };
  return (
    <>
      <div className=" border-6 border-emerald-900 p-3 bg-[#F6F6FA] rounded-sm min-h-screen">
        <div className="relative  overflow-hidden bg-white flex flex-col m min-h-screen">
          {/* خلفية اليسار */}
          <img
            src={leftBackground}
            alt="Left Background"
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[30%] object-contain pointer-events-none select-none z-0"
          />
          {/* خلفية اليمين */}
          <img
            src={rightBackground}
            alt="Right Background"
            className="absolute right-0 top-1/2 -translate-y-1/2 h-[30%] object-contain pointer-events-none select-none z-0"
          />
          {/* رأس الصفحة */}
          <div className="">
            <div className="relative z-10">
              <header className="flex justify-between items-center border-b p-4">
                {/* اللوغو يسار */}
                <img
                  src={InspireLogo}
                  alt="Inspire Logo"
                  className="h-10 w-auto object-contain"
                />

                {/* العنوان والوصف بالوسط كتمركز، لكن النص يسار */}
                <div className="flex-1 flex justify-center">
                  <div className="text-left">
                    <h1 className="text-lg font-semibold">Create Profile</h1>
                    <p className="text-sm text-gray-500">
                      Lorem Ipsum is simply dummy text of the printing industry.
                    </p>
                  </div>
                </div>

                {/* عنصر وهمي يمين لتوازن الشكل */}
                <div className="w-10" />
              </header>
            </div>

            {/* محتوى تسجيل الدخول */}
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
              <FormProvider {...methods}>
                <form
                  onSubmit={methods.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <PersonalInfoCard />
                  <FamilyDetailsCard />
                  <NationalityCard />
                  <CultureLanguageCard />
                  <Button type="submit">submit</Button>
                </form>
              </FormProvider>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
