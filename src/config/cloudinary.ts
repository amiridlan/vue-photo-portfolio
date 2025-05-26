const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/dxetnkgmy/image/upload/';

export function getCloudinaryUrl(localImagePath: string): string {
  // Remove leading slash if present
  const normalizedPath = localImagePath.startsWith('/') ? localImagePath.substring(1) : localImagePath;
  // Replace 'images/' folder prefix with empty string to match Cloudinary public ID structure
  const publicId = normalizedPath.replace(/^images\//, '');
  return `${CLOUDINARY_BASE_URL}${publicId}`;
}

export default {
  CLOUDINARY_BASE_URL,
  getCloudinaryUrl,
};
