import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { z } from "zod";

import { saveCredential } from "@/state/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/state/app/hook";

const formSchema = z.object({
  username: z.string().trim().min(4, {
    message: "Username must be at least 4 characters.",
  }),

  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

type TFormSchema = z.infer<typeof formSchema>;

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const {username , password} = useAppSelector((state) => state.auth)

  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: TFormSchema) => {
    if (values.password != "magnus123" || values.username != "ironclad") return;
    console.log("username: " , username)
    console.log("password: " , password)
    dispatch(
      saveCredential({ username: values.username, password: values.password })
    );
    form.reset();
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
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
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
