import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AuthSignInForm from "./AuthSignInForm";
import AuthSignUpForm from "./AuthSignUpForm";

const AuthContainer = () => {
  return (
    <Tabs defaultValue='sign-in' className='mx-auto md:w-[600px]'>
      <TabsList className='grid w-full grid-cols-2 bg-background'>
        <TabsTrigger
          value='sign-in'
          className='data-[state=active]:bg-primary/10 data-[state=active]:text-primary'
        >
          Sign In
        </TabsTrigger>
        <TabsTrigger
          value='sign-up'
          className='data-[state=active]:bg-primary/10 data-[state=active]:text-primary'
        >
          Sign Up
        </TabsTrigger>
      </TabsList>
      <TabsContent value='sign-in'>
        <Card>
          <CardHeader className='gap-1'>
            <CardTitle>Sign in</CardTitle>
            <CardDescription>
              Log in to access your account and start shopping.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <AuthSignInForm />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value='sign-up'>
        <Card>
          <CardHeader className='gap-1'>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Create your account to start shopping easily and quickly.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <AuthSignUpForm />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default AuthContainer;
