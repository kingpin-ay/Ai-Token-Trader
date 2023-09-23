import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  firstName: z.string().trim().min(2, {
    message: "First Name must be al least 2 characters.",
  }),
  lastName: z.string().trim().min(2, {
    message: "last Name must be al least 2 characters.",
  }),

  username: z.string().trim().min(4, {
    message: "Username must be at least 4 characters.",
  }),

  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

type TFormSchema = z.infer<typeof formSchema>;

const SignUpForm = () => {
  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = () => {

  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="lg:space-y-4">
        <div className="flex gap-4 justify-between">
          <div className="grow">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Saptendu" {...field} />
                    </FormControl>
                    <FormDescription>This is your First Name.</FormDescription>
                  </FormItem>
                )}
              />
          </div>
          <div className="grow">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Kundu" {...field} />
                    </FormControl>
                    <FormDescription>This is your Last Name.</FormDescription>
                  </FormItem>
                )}
              />
          </div>
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="sapk01" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name , USERNAME.
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>
              <FormDescription>
                Password For the assigned Username.
              </FormDescription>
            </FormItem>
          )}
        />

        <Button
          disabled={form.formState.isSubmitting}
          className="disabled:bg-slate-500"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
