import Heading from "@/components/Heading";
import ProfileForm from "./ProfileForm";

const ProfileContainer = () => {
  return (
    <section className='flex-1'>
      <div className='space-y-4 rounded-md bg-background px-10 py-8'>
        <header>
          <Heading className='text-xl'>Profile Info</Heading>
        </header>
        <ProfileForm />
      </div>
    </section>
  );
};

export default ProfileContainer;
