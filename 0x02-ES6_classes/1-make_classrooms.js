import ClassRoom from './0-classroom';

/**
 * Initializes an array of ClassRoom objects with specified sizes.
 * @returns {ClassRoom[]} An array of ClassRoom objects.
 */
function initializeRooms() {
  const roomSizes = [19, 20, 34];
  return roomSizes.map((size) => new ClassRoom(size));
}

export default initializeRooms;
