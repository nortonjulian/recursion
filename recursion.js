/** product: calculate the product of an array of numbers. */

function product(nums) {
  // Base case: If the array is empty, return 1 (identity value for multiplication).
  if (nums.length === 0) {
    return 1;
  }

  // Recursive case: Multiply the first element with the product of the rest of the array.
  // Pass the subarray from index 1 to the recursive call to exclude the first element.
  return nums[0] * product(nums.slice(1));
}


/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // Base case: If the array is empty, return 0.
  if (words.length === 0) {
    return 0;
  }

  // Recursive case: Compare the length of the first word with the longest word in the rest of the array.
  // Return the greater value.
  const currentWordLength = words[0].length;
  const longestRest = longest(words.slice(1));
  return Math.max(currentWordLength, longestRest);
}


/** everyOther: return a string with every other letter. */
function everyOther(str) {
  // Base case: If the string is empty or contains only one character, return the string as is.
  if (str.length < 2) {
    return str;
  }

  // Recursive case: Return the first character concatenated with the everyOther function called on the remaining string starting from index 2.
  return str[0] + everyOther(str.slice(2));
}


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // Base case: If the string has a length of 0 or 1, it is considered a palindrome.
  if (str.length < 2) {
    return true;
  }

  // Recursive case: Check if the first and last characters of the string are equal.
  // If they are, recursively call isPalindrome on the substring excluding the first and last characters.
  // If they are not equal, the string is not a palindrome.
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  // Base case: If the array is empty, return -1 to indicate the value was not found.
  if (arr.length === 0) {
    return -1;
  }

  // Recursive case: Check if the first element of the array is equal to the value.
  // If it is, return 0 (the index of the first element).
  // If not, recursively call findIndex on the rest of the array and add 1 to the result (since we are working with a smaller subarray).
  if (arr[0] === val) {
    return 0;
  } else {
    const foundIndex = findIndex(arr.slice(1), val);
    return foundIndex === -1 ? -1 : foundIndex + 1;
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // Base case: If the string is empty, return an empty string.
  if (str === "") {
    return "";
  }

  // Recursive case: Return the last character of the string concatenated with revString called on the substring excluding the last character.
  return str[str.length - 1] + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];

  function gather(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        strings.push(obj[key]);
      } else if (typeof obj[key] === "object") {
        gather(obj[key]);
      }
    }
  }

  gather(obj);

  return strings;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  // Define a helper function for the recursive binary search algorithm
  function binarySearchRecursive(low, high) {
    // Base case: If the search range is invalid (low > high), the value was not found.
    if (low > high) {
      return -1;
    }

    // Calculate the middle index of the search range
    const mid = Math.floor((low + high) / 2);

    // Check if the middle element matches the value
    if (arr[mid] === val) {
      return mid;
    }

    // If the middle element is greater than the value, search the left half of the array
    if (arr[mid] > val) {
      return binarySearchRecursive(low, mid - 1);
    }

    // If the middle element is less than the value, search the right half of the array
    return binarySearchRecursive(mid + 1, high);
  }

  // Start the binary search with the initial low and high values
  return binarySearchRecursive(0, arr.length - 1);
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
