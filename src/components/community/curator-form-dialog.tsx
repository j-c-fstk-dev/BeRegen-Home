"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CuratorForm } from "./curator-form";

export function CuratorFormDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">Apply as Curator/Validator</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Become a Curator/Validator</DialogTitle>
          <DialogDescription>
            Fill out the form below to apply. We'll review your application and get in touch.
          </DialogDescription>
        </DialogHeader>
        <CuratorForm />
      </DialogContent>
    </Dialog>
  );
}
