function hasContiguousSum(arr, target) {
  const n = arr.length;
  if (n === 0) return false;

  let currentSum = arr[0];
  let start = 0;

  for (let end = 1; end < n; end++) {
    while (currentSum > target && start < end - 1) {
      currentSum -= arr[start];
      start++;
    }

    if (currentSum === target) return true;

    currentSum += arr[end];
  }

  return currentSum === target;
}
