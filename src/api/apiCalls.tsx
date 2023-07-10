import supabase from "../client/Supabase";

export const createMessage = async (message: {
  created_at: string;
  roomid: number | undefined;
  userid: number | undefined;
  content: string | undefined;
}) => {
  try {
    const { data, error } = await supabase
      .from("message")
      .insert(message)
      .select()
      .single();
    if (error) throw error;
    return data;
  } catch (error: any) {
    console.log(error);
  }
};
