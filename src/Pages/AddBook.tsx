import { useReducer } from "react"
// import { postReq } from "../Hooks/MyHooks"
import { useMutation } from "@tanstack/react-query"

function AddBook() {

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case action.type:
        return {
          ...state,
          [action.type]: action.value
        }
    }
  }

  const initialState = {
    title: "",
    page: 0,
    desc: "",
    author: "",
    price: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e:any) => {
    let { name, value } = e.target;

    if (name === "page" || name === "price") {
      value = parseInt(value, 10);
    }

    dispatch({
      type: name,
      value: value,
    });
  };

  const createPostMutation = useMutation({
    mutationFn: async (data) => {
      console.log(data);
      try {
        const response = await fetch("http://localhost:3000/books/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          return response.json();
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to create book");
        }
      } catch (error:any) {
        throw new Error("Failed to create book: " + error.message);
      }
    },
  });

  const handleFormSubmit = (e:any) => {
    e.preventDefault();
    createPostMutation.mutate({
      ...state,
    });
  };

  return (
    <>
      <form method="POST" onSubmit={handleFormSubmit} className="rounded-tl-xl rounded-bl-xl w-full h-screen bg-white flex items-center flex-col p-12 overflow-auto">
        <div className="w-full flex justify-center items-center gap-5 border rounded-xl p-5">
          <div className="w-full h-full">
            <div className="flex justify-center flex-col p-2 gap-2">
              <label htmlFor="" className="font-extrabold text-slate-950">Title Book</label>
              <input required={true} className="h-10 input w-full bg-white border border-black" type="text" placeholder="Enter Title Book" name="title" onChange={handleChange} />
            </div>
            <div className="flex justify-center flex-col p-2 gap-2">
              <label htmlFor="" className="font-extrabold text-slate-950">Pages</label>
              <input required={true} className="h-10 input w-full bg-white border border-black" type="number" placeholder="Enter Pages Book" name="page" onChange={handleChange} />
            </div>
            <div className="flex justify-center flex-col p-2 gap-2">
              <label htmlFor="" className="font-extrabold text-slate-950">Description</label>
              <input required={true} className="h-10 input w-full bg-white border border-black" type="text" placeholder="Enter Description Book" name="desc" onChange={handleChange} />
            </div>
            <div className="flex justify-center flex-col p-2 gap-2">
              <button className="btn w-28">Send Data</button>
            </div>
          </div>
          <div className="w-full h-full">
            <div className="flex justify-center flex-col p-2 gap-2">
              <label htmlFor="" className="font-extrabold text-slate-950">Author</label>
              <input required={true} className="h-10 input w-full bg-white border border-black" type="text" placeholder="Enter Author Book" name="author" onChange={handleChange} />
            </div>
            <div className="flex justify-center flex-col p-2 gap-2">
              <label htmlFor="" className="font-extrabold text-slate-950">Price</label>
              <input required={true} className="h-10 input w-full bg-white border border-black" type="number" placeholder="Enter Price Book" name="price" onChange={handleChange} />
            </div>
            <div className="flex justify-center flex-col p-2 gap-2">
              <label htmlFor="" className="font-extrabold text-slate-950">Created At</label>
              <input required={true} className="h-10 input w-full bg-white border border-black" type="date" name="created_at" onChange={handleChange} />
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default AddBook