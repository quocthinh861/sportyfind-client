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

export const uploadImages = async (files, basePath = "") => {
  const uploadPromises = files.map((file) => {
    const path = `${basePath}/${file.name}`;
    return uploadImage(file, path);
  });
  const imagePaths = await Promise.all(uploadPromises);
  return imagePaths;
};

export const getImageUrl = async (path) => {
  return await supabase.storage.from("images").getPublicUrl(path);
}

export const listImages = async (basePath = "") => {
  const { data, error } = await supabase.storage
    .from("images")
    .list(basePath, { limit: 5 }); // You can adjust the limit as needed

  if (error) {
    throw error;
  }

  const imageUrls = data.map((image) => {
      return supabase.storage.from("images").getPublicUrl(`${basePath}/${image.name}`);
  });

  return imageUrls;
};

