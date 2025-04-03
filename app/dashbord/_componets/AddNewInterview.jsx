"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
 const[jobPosition ,setJobPosition]=useState();

//AIzaSyDbWtF6eXUFsTedV0p4CT0AMN8rjPg5mvE

 const[jobDesc ,setJobDesc]=useState();
 const[jobExperience ,setJobExperience]=useState();


 const onSubmit=(e)=>{
e.preventDefault
 }

  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105  hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="font-bold text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about Your job Interview
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>Add Details about your Job position</h2>
                  <div className=" mt-7 my-2">
                    <label>Job role/Job position</label>
                    <Input placeholder="backend Developer" required  
                    onchange={(event)=>setJobPosition(event.target.value)}
                    />
                  </div>

                  <div className="  my-2">
                    <label>Job Description</label>
                    <Textarea placeholder="react ,angular" required 
                    onchange={(event)=>setJobDesc(event.target.value)}
                    />
                  </div>

                  <div className="  my-2">
                    <label>Years of Experience</label>
                    <Textarea placeholder="  ex .5 years" type="number" max="40" required 
                    onchange={(event)=>setJobExperience(event.target.value)}
                    />
                  </div>
                </div>

                <div className="flex gap-5 justify-end">
                  <Button  type="button" variant="ghost" onClick={() => setOpenDialog(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Start Interview</Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
