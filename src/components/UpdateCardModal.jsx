"use client";

import { authClient } from "@/app/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";
import { HiCheck } from "react-icons/hi";
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
        className="group relative w-full h-11 text-[10.5px] font-semibold tracking-[0.22em] uppercase overflow-hidden border border-[#7a1e2d] text-[#7a1e2d] bg-transparent hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 font-sans"
      >
        <span className="absolute inset-0 bg-[#7a1e2d] -translate-x-full group-hover:translate-x-0 transition-transform duration-[350ms] ease-out" />
        <BiEdit className="relative z-10 text-base" />
        <span className="relative z-10">Update Profile</span>
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog
            className="sm:max-w-md overflow-hidden rounded-none font-sans"
          >
            <Modal.CloseTrigger />

            {/* Gold top bar */}
            <div className="h-[3px] w-full bg-gradient-to-r from-[#7a1e2d] via-[#D5B471] to-[#7a1e2d]" />

            <Modal.Header className="px-6 pt-6 pb-4 border-b border-[#7a1e2d]/8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-none bg-[#7a1e2d] flex items-center justify-center flex-shrink-0">
                  <BiUser className="text-[#D5B471] text-base" />
                </div>
                <div>
                  <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[#D5B471]">
                    Account
                  </p>
                  <Modal.Heading
                    className="text-[#2a0e17] font-light text-xl tracking-[0.04em] font-serif"
                  >
                    Update Profile
                  </Modal.Heading>
                </div>
              </div>
            </Modal.Header>

            <Modal.Body className="px-6 py-6">
              <Surface variant="default">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

                  <TextField className="w-full flex flex-col gap-2">
                    <Label className="text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#7a1e2d]/50">
                      Name <span className="text-[#7a1e2d]">*</span>
                    </Label>
                    <Input
                      placeholder="Enter your name"
                      type="text"
                      className="h-11 px-4 bg-white border border-[#7a1e2d]/15 text-[13px] text-[#2a0e17] placeholder:text-[#7a1e2d]/25 focus:outline-none focus:border-[#7a1e2d]/40 focus:ring-1 focus:ring-[#7a1e2d]/10 transition-all duration-200 rounded-none"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-[#7a1e2d] text-[11px] tracking-[0.04em]">{errors.name.message}</p>
                    )}
                  </TextField>

                  <TextField className="w-full flex flex-col gap-2">
                    <Label className="text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#7a1e2d]/50">
                      Image URL <span className="text-[#7a1e2d]">*</span>
                    </Label>
                    <Input
                      placeholder="https://example.com/image.jpg"
                      type="url"
                      className="h-11 px-4 bg-white border border-[#7a1e2d]/15 text-[13px] text-[#2a0e17] placeholder:text-[#7a1e2d]/25 focus:outline-none focus:border-[#7a1e2d]/40 focus:ring-1 focus:ring-[#7a1e2d]/10 transition-all duration-200 rounded-none"
                      {...register("image", { required: "Image URL is required" })}
                    />
                    {errors.image && (
                      <p className="text-[#7a1e2d] text-[11px] tracking-[0.04em]">{errors.image.message}</p>
                    )}
                  </TextField>

                  <Modal.Footer className="px-0 pt-2 flex gap-3">
                    <Button
                      slot="close"
                      variant="secondary"
                      className="flex-1 h-11 text-[10.5px] font-semibold tracking-[0.22em] uppercase border border-[#7a1e2d]/15 text-[#7a1e2d]/40 bg-transparent hover:border-[#7a1e2d]/30 hover:text-[#7a1e2d]/60 transition-all duration-200 rounded-none"
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      slot="close"
                      className="group relative flex-1 h-11 text-[10.5px] font-semibold tracking-[0.22em] uppercase overflow-hidden border border-[#7a1e2d] text-[#7a1e2d] bg-transparent hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 rounded-none"
                    >
                      <span className="absolute inset-0 bg-[#7a1e2d] -translate-x-full group-hover:translate-x-0 transition-transform duration-[350ms] ease-out" />
                      <HiCheck className="relative z-10 w-3.5 h-3.5" />
                      <span className="relative z-10">Save Changes</span>
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