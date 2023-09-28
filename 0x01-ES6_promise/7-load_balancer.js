/**
 * Load balancer function that selects the result of the faster resolving Promise.
 *
 * @param {Promise} chinaDownload - Promise representing download from China.
 * @param {Promise} USDownload - Promise representing download from the US.
 * @returns {Promise} A Promise that resolves to the value of the faster resolving Promise.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  // Use Promise.race to resolve with the result of the faster Promise.
  return Promise.race([chinaDownload, USDownload]);
}
