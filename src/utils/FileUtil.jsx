import supabase from "../client/Supabase";

export const uploadImage = async (file, path = "") => {
  const { data, error } = await supabase.storage
    .from("images")
    .upload(path, file, {
      cacheControl: "3600",
      upsert: true,
    });
  if (error) {
    throw error;
  }
  return data.path;
};

export const getImageUrl = async (path) => {
  return await supabase.storage.from("images").getPublicUrl(path);
}
