import React from "react";

function Question(idx) {
  let question = [
    [
      {
        name: "",
        statement: "",
        exp1: "",
        exp2: "",
        output: "",
        tc: "",
        as: "",
        con: "",
        sol: "",
      },
    ],
    [
      {
        name: "Reverse The String",
        statement: "You are given a string s. You need to reverse the string.",
        exp1: "Input: s = Geeks Output: skeeG",
        exp2: "Input: s = for Output: rof",
        output:
          "You only need to complete the function reverseWord() that takes s as parameter and returns the reversed string.",
        tc: "Expected Time Complexity: O(|S|).",
        as: "Expected Auxiliary Space: O(1).",
        con: "1 <= |s| <= 10000",
        sol: "https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/",
      },
    ],
    [
      {
        name: "Rotate The Array",
        statement:
          "Given an array, rotate the array by one position in clock-wise direction",
        exp1: "Input: N = 5 A[] = {1, 2, 3, 4, 5} Output: 5 1 2 3 4",
        exp2: "Input: N = 8 A[] = {9, 8, 7, 6, 4, 2, 1, 3} Output: 3 9 8 7 6 4 2 1",
        output:
          "You don't need to read input or print anything. Your task is to complete the function rotate() which takes the array A[] and its size N as inputs and modify the array.",
        tc: "Expected Time Complexity: O(N)",
        as: "Expected Auxiliary Space: O(1)",
        con: "1<=N<=105\n0<=a[i]<=105",
        sol: "https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one/0",
      },
    ],
    [
      {
        name: "Maximun Sum of the SubArray",
        statement:
          "Given an array arr of N integers. Find the contiguous sub-array with maximum sum",
        exp1: "Input: N = 5 arr[] = {1,2,3,-2,5} Output: 9 Explanation: Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which is a contiguous subarray.",
        exp2: "Input: N = 4 arr[] = {-1,-2,-3,-4} Output: -1 Explanation: Max subarray sum is -1 of element (-1)",
        output:
          "You don't need to read input or print anything. The task is to complete the function maxSubarraySum() which takes arr and N as input parameters and returns the sum of subarray with maximum sum.",
        tc: "Expected Time Complexity: O(N)",
        as: "Expected Auxiliary Space: O(1)",
        con: "1 ≤ N ≤ 106 -107 ≤ A[i] ≤ 107",
        sol: "https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/",
      },
    ],
    [
      {
        name: "Minimize the maximum difference between the heights",
        statement:
          "Given an array arr[] denoting heights of N towers and a positive integer K, you have to modify the height of each tower either by increasing or decreasing them by K only once. After modifying, height should be a non-negative integer. Find out what could be the possible minimum difference of the height of shortest and longest towers after you have modified each tower. A slight modification of the problem can be found here.",
        exp1: "Input: K = 2, N = 4 Arr[] = {1, 5, 8, 10} Output: 5 Explanation: The array can be modified as {3, 3, 6, 8}. The difference between the largest and the smallest is 8-3 = 5.",
        exp2: "Input: K = 3, N = 5 Arr[] = {3, 9, 12, 16, 20} Output: 11 Explanation: The array can be modified as {6, 12, 9, 13, 17}. The difference between the largest and the smallest is 17-6 = 11. ",
        output:
          "You don't need to read input or print anything. Your task is to complete the function getMinDiff() which takes the arr[], n and k as input parameters and returns an integer denoting the minimum difference.",
        tc: "Expected Time Complexity: O(N*logN)",
        as: "Expected Auxiliary Space: O(N)",
        con: "1 ≤ K ≤ 104 1 ≤ N ≤ 105 1 ≤ Arr[i] ≤ 105",
        sol: "https://www.geeksforgeeks.org/minimize-the-maximum-difference-between-the-heights/",
      },
    ],
    [
      {
        name: "Minimum number of jumps to reach end",
        statement:
          "Given an array of N integers arr[] where each element represents the max number of steps that can be made forward from that element. Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then you cannot move through that element.Note: Return -1 if you can't reach the end of the array.",
        exp1: "Input:N = 11 arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9} Output: 3 Explanation: First jump from 1st element to 2nd element with value 3. Now, from here we jump to 5th element with value 9, and from here we will jump to last.",
        exp2: "Input :N = 6 arr = {1, 4, 3, 2, 6, 7}Output: 2 Explanation: First we jump from the 1st to 2nd element and then jump to the last element.",
        output:
          "You don't need to read input or print anything. Your task is to complete function minJumps() which takes the array arr and it's size N as input parameters and returns the minimum number of jumps. If not possible returns -1.",
        tc: "Expected Time Complexity: O(N)",
        as: "Expected Space Complexity: O(1)",
        con: "1 ≤ N ≤ 107 0 ≤ arri ≤ 107",
        sol: "https://www.geeksforgeeks.org/minimum-number-of-jumps-to-reach-end-of-a-given-array/",
      },
    ],
  ];
  return question[idx];
}

export default Question;
