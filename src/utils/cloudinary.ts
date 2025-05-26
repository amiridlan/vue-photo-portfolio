/**
 * Utility functions for generating Cloudinary image URLs with transformations.
 * This file is intended for frontend usage without Node.js SDK.
 */

const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${import.meta.env.CLOUDINARY_CLOUD_NAME}/image/upload/`;

/**
 * Generate a Cloudinary URL for the given public ID with auto format and quality.
 * @param publicId - Cloudinary public ID of the image
 * @returns full Cloudinary URL with optimization parameters
 */
export function getOptimizedUrl(publicId: string): string {
  return `${CLOUDINARY_BASE_URL}f_auto,q_auto/${publicId}`;
}

/**
 * Generate a Cloudinary URL with auto crop and gravity, resizing to given width and height.
 * @param publicId - Cloudinary public ID of the image
 * @param width - desired width
 * @param height - desired height
 * @returns full Cloudinary URL with crop and resize parameters
 */
export function getAutoCropUrl(publicId: string, width = 500, height = 500): string {
  return `${CLOUDINARY_BASE_URL}c_auto,g_auto,w_${width},h_${height}/${publicId}`;
}

/**
 * Convert local image path to Cloudinary public ID by removing leading slash and 'images/' prefix.
 * @param localImagePath - local image path (e.g., /images/kmk/kmk_1.avif)
 * @returns Cloudinary public ID (e.g., kmk/kmk_1.avif)
 */
export function toPublicId(localImagePath: string): string {
  const normalizedPath = localImagePath.startsWith('/') ? localImagePath.substring(1) : localImagePath;
  return normalizedPath.replace(/^images\//, '');
}
