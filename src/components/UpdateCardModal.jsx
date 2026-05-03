"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";
import { useForm } from "react-hook-form";

export function UpdateUserModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, image } = data;
    await authClient.updateUser({ name, image });
  };

  return (
    <Modal>
      <Button
        variant="secondary"
        className="w-full flex items-center justify-center gap-2 bg-[#7a1e2d] hover:bg-[#631421] text-white text-sm font-semibold py-2.5 rounded-xl transition-all shadow-sm"
      >
        <BiEdit className="text-base" />
        Update Profile
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md rounded-2xl overflow-hidden">
            <Modal.CloseTrigger />

            <Modal.Header className="px-6 pt-6 pb-0">
              <Modal.Icon className="bg-[#7a1e2d]/10 text-[#7a1e2d]">
                <BiUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="text-gray-900 font-bold text-lg">
                Update Profile
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="px-6 py-5">
              <Surface variant="default">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                  <TextField className="w-full flex flex-col gap-1.5">
                    <Label className="text-sm font-medium text-gray-700">
                      Name
                    </Label>
                    <Input
                      placeholder="Enter your name"
                      type="text"
                      className="h-11 px-4 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7a1e2d]/30 transition-all"
                      {...register("name", {
                        required: "Name is required",
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs">{errors.name.message}</p>
                    )}
                  </TextField>

                  <TextField className="w-full flex flex-col gap-1.5">
                    <Label className="text-sm font-medium text-gray-700">
                      Image URL
                    </Label>
                    <Input
                      placeholder="https://example.com/image.jpg"
                      type="url"
                      className="h-11 px-4 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7a1e2d]/30 transition-all"
                      {...register("image", {
                        required: "Image URL is required",
                      })}
                    />
                    {errors.image && (
                      <p className="text-red-500 text-xs">{errors.image.message}</p>
                    )}
                  </TextField>

                  <Modal.Footer className="px-0 pt-2 flex gap-3">
                    <Button
                      slot="close"
                      variant="secondary"
                      className="flex-1 h-10 rounded-xl border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-all"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      slot="close"
                      className="flex-1 h-10 rounded-xl bg-[#7a1e2d] hover:bg-[#631421] text-white text-sm font-semibold transition-all shadow-sm"
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}