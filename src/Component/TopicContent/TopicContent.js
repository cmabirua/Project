import React, { useState } from "react"
import Footer from "../Footer/Footer";
import Card from "./Card/Card";
import Styles from "./TopicContent.module.css"
// import Styles from "./TopicContent.module.css"
export default function TopicContent(props){
    // console.log(props.match.params.id); //Give Topic Name
    var x = props.match.params.id
    let arr = [
    "Array",
    "LinkedList",
    "Stack",
    "Queue",
    "Tree",
    "Graph",
    "Searching",
    "Sorting",
    "DP",
    "BST",
    "Matrix",
    "Heap"
  ];
  var idx = 0
  for(var i = 0;i<arr.length;i++){
      if(arr[i]==x){
          idx = i;
          break;
      }
  }
  
    let question = [[
      {
        Topic: "Array",
        Problem: "Reverse the array",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/",
      },
      {
        Topic: "Array",
        Problem: "Find the maximum and minimum element in an array",
        Done: false,
        URL: "https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/",
      },
      {
        Topic: "Array",
        Problem: 'Find the "Kth" max and min element of an array ',
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/kth-smallest-element/0",
      },
      {
        Topic: "Array",
        Problem:
          "Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s/0",
      },
      {
        Topic: "Array",
        Problem: "Move all the negative elements to one side of the array ",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/",
      },
      {
        Topic: "Array",
        Problem: "Find the Union and Intersection of the two sorted arrays.",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/union-of-two-arrays/0",
      },
      {
        Topic: "Array",
        Problem: "Write a program to cyclically rotate an array by one.",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one/0",
      },
      {
        Topic: "Array",
        Problem: "find Largest sum contiguous Subarray [V. IMP]",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0",
      },
      {
        Topic: "Array",
        Problem: "Minimise the maximum difference between heights [V.IMP]",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1",
      },
      {
        Topic: "Array",
        Problem: "Minimum no. of Jumps to reach end of an array",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0",
      },
      {
        Topic: "Array",
        Problem: "find duplicate in an array of N+1 Integers",
        Done: false,
        URL: "https://leetcode.com/problems/find-the-duplicate-number/",
      },
      {
        Topic: "Array",
        Problem: "Merge 2 sorted arrays without using Extra space.",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1",
      },
      {
        Topic: "Array",
        Problem: "Kadane's Algo [V.V.V.V.V IMP]",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0",
      },
      {
        Topic: "Array",
        Problem: "Merge Intervals",
        Done: false,
        URL: "https://leetcode.com/problems/merge-intervals/",
      },
      {
        Topic: "Array",
        Problem: "Next Permutation",
        Done: false,
        URL: "https://leetcode.com/problems/next-permutation/",
      },
      {
        Topic: "Array",
        Problem: "Count Inversion",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/inversion-of-array/0",
      },
      {
        Topic: "Array",
        Problem: "Best time to buy and Sell stock",
        Done: false,
        URL: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
      {
        Topic: "Array",
        Problem:
          "find all pairs on integer array whose sum is equal to given number",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1",
      },
      {
        Topic: "Array",
        Problem: "find common elements In 3 sorted arrays",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/common-elements1132/1",
      },
      {
        Topic: "Array",
        Problem:
          "Rearrange the array in alternating positive and negative items with O(1) extra space",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/",
      },
      {
        Topic: "Array",
        Problem: "Find if there is any subarray with sum equal to 0",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/subarray-with-0-sum/0",
      },
      {
        Topic: "Array",
        Problem: "Find factorial of a large number",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/factorials-of-large-numbers/0",
      },
      {
        Topic: "Array",
        Problem: "find maximum product subarray ",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/maximum-product-subarray3604/1",
      },
      {
        Topic: "Array",
        Problem: "Find longest coinsecutive subsequence",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/longest-consecutive-subsequence/0",
      },
      {
        Topic: "Array",
        Problem:
          'Given an array of size n and a number k, fin all elements that appear more than " n/k " times.',
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/given-an-array-of-of-size-n-finds-all-the-elements-that-appear-more-than-nk-times/",
      },
      {
        Topic: "Array",
        Problem: "Maximum profit by buying and selling a share atmost twice",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/",
      },
      {
        Topic: "Array",
        Problem: "Find whether an array is a subset of another array",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/array-subset-of-another-array/0",
      },
      {
        Topic: "Array",
        Problem: "Find the triplet that sum to a given value",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/triplet-sum-in-array/0",
      },
      {
        Topic: "Array",
        Problem: "Trapping Rain water problem",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/trapping-rain-water/0",
      },
      {
        Topic: "Array",
        Problem: "Chocolate Distribution problem",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem/0",
      },
      {
        Topic: "Array",
        Problem: "Smallest Subarray with sum greater than a given value",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/smallest-subarray-with-sum-greater-than-x/0",
      },
      {
        Topic: "Array",
        Problem: "Three way partitioning of an array around a given value",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/three-way-partitioning/1",
      },
      {
        Topic: "Array",
        Problem: "Minimum swaps required bring elements less equal K together",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/minimum-swaps-required-to-bring-all-elements-less-than-or-equal-to-k-together/0",
      },
      {
        Topic: "Array",
        Problem:
          "Minimum no. of operations required to make an array palindrome",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/palindromic-array/0",
      },
      {
        Topic: "Array",
        Problem: "Median of 2 sorted arrays of equal size",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/find-the-median0527/1",
      },
      {
        Topic: "Array",
        Problem: "Median of 2 sorted arrays of different size",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/",
      },
    ],[
      {
        Topic: "LinkedList",
        Problem:
          "Write a Program to reverse the Linked List. (Both Iterative and recursive)",
        Done: false,
        URL: "https://www.geeksforgeeks.org/reverse-a-linked-list/",
      },
      {
        Topic: "LinkedList",
        Problem: "Reverse a Linked List in group of Given Size. [Very Imp]",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1",
      },
      {
        Topic: "LinkedList",
        Problem: "Write a program to Detect loop in a linked list.",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1",
      },
      {
        Topic: "LinkedList",
        Problem: "Write a program to Delete loop in a linked list.",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1",
      },
      {
        Topic: "LinkedList",
        Problem: "Find the starting point of the loop. ",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/find-first-node-of-loop-in-a-linked-list/",
      },
      {
        Topic: "LinkedList",
        Problem: "Remove Duplicates in a sorted Linked List.",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/remove-duplicate-element-from-sorted-linked-list/1",
      },
      {
        Topic: "LinkedList",
        Problem: "Remove Duplicates in a Un-sorted Linked List.",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1",
      },
      {
        Topic: "LinkedList",
        Problem:
          "Write a Program to Move the last element to Front in a Linked List.",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/move-last-element-to-front-of-a-given-linked-list/",
      },
      {
        Topic: "LinkedList",
        Problem: "Add “1” to a number represented as a Linked List.",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1",
      },
      {
        Topic: "LinkedList",
        Problem: "Add two numbers represented by linked lists.",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1",
      },
      {
        Topic: "LinkedList",
        Problem: "Intersection of two Sorted Linked List.",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/1",
      },
      {
        Topic: "LinkedList",
        Problem: "Intersection Point of two Linked Lists.",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1",
      },
      {
        Topic: "LinkedList",
        Problem: "Merge Sort For Linked lists.[Very Important]",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/sort-a-linked-list/1",
      },
      {
        Topic: "LinkedList",
        Problem: "Quicksort for Linked Lists.[Very Important]",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/quick-sort-on-linked-list/1",
      },
      {
        Topic: "LinkedList",
        Problem: "Find the middle Element of a linked list.",
        Done: false,
        URL: "https://leetcode.com/problems/middle-of-the-linked-list/",
      },
      {
        Topic: "LinkedList",
        Problem: "Check if a linked list is a circular linked list.",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/circular-linked-list/1",
      },
      {
        Topic: "LinkedList",
        Problem: "Split a Circular linked list into two halves.",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1",
      },
      {
        Topic: "LinkedList",
        Problem:
          "Write a Program to check whether the Singly Linked list is a palindrome or not.",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1",
      },
      {
        Topic: "LinkedList",
        Problem: "Deletion from a Circular Linked List.",
        Done: false,
        URL: "https://www.geeksforgeeks.org/deletion-circular-linked-list/",
      },
      {
        Topic: "LinkedList",
        Problem: "Reverse a Doubly Linked list.",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1",
      },
      {
        Topic: "LinkedList",
        Problem: "Find pairs with a given sum in a DLL.",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/find-pairs-given-sum-doubly-linked-list/",
      },
      {
        Topic: "LinkedList",
        Problem:
          "Count triplets in a sorted DLL whose sum is equal to given value “X”.",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/count-triplets-sorted-doubly-linked-list-whose-sum-equal-given-value-x/",
      },
      {
        Topic: "LinkedList",
        Problem: "Sort a “k”sorted Doubly Linked list.[Very IMP]",
        Done: false,
        URL: "https://www.geeksforgeeks.org/sort-k-sorted-doubly-linked-list/",
      },
      {
        Topic: "LinkedList",
        Problem: "Rotate DoublyLinked list by N nodes.",
        Done: false,
        URL: "https://www.geeksforgeeks.org/rotate-doubly-linked-list-n-nodes/",
      },
      {
        Topic: "LinkedList",
        Problem:
          "Rotate a Doubly Linked list in group of Given Size.[Very IMP]",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/reverse-doubly-linked-list-groups-given-size/",
      },
      {
        Topic: "LinkedList",
        Problem: "Can we reverse a linked list in less than O(n) ?",
        Done: false,
        URL: "<->",
      },
      {
        Topic: "LinkedList",
        Problem:
          "Why Quicksort is preferred for. Arrays and Merge Sort for LinkedLists ?",
        Done: false,
        URL: "<->",
      },
      {
        Topic: "LinkedList",
        Problem: "Flatten a Linked List",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1",
      },
      {
        Topic: "LinkedList",
        Problem: "Sort a LL of 0's, 1's and 2's",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1",
      },
      {
        Topic: "LinkedList",
        Problem: "Clone a linked list with next and random pointer",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1",
      },
      {
        Topic: "LinkedList",
        Problem: "Merge K sorted Linked list",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1",
      },
      {
        Topic: "LinkedList",
        Problem: "Multiply 2 no. represented by LL",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/multiply-two-linked-lists/1",
      },
      {
        Topic: "LinkedList",
        Problem: "Delete nodes which have a greater value on right side",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/delete-nodes-having-greater-value-on-right/1",
      },
      {
        Topic: "LinkedList",
        Problem: "Segregate even and odd nodes in a Linked List",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/segregate-even-and-odd-nodes-in-a-linked-list/0",
      },
      {
        Topic: "LinkedList",
        Problem: "Program for n’th node from the end of a Linked List",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1",
      },
      {
        Topic: "LinkedList",
        Problem:
          "Find the first non-repeating character from a stream of characters",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream/0",
      },
    ],[{
        Topic: "Stacks & Queues",
        Problem: " Implement Stack from Scratch",
        Done: false,
        URL: "https://www.tutorialspoint.com/javaexamples/data_stack.htm",
      },
      {
        Topic: "Stacks & Queues",
        Problem: " Implement Queue from Scratch",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Implement 2 stack in an array",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "find the middle element of a stack",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/design-a-stack-with-find-middle-operation/",
      },
      {
        Topic: "Stacks & Queues",
        Problem: 'Implement "N" stacks in an Array',
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/efficiently-implement-k-stacks-single-array/",
      },
      {
        Topic: "Stacks & Queues",
        Problem:
          "Check the expression has valid or Balanced parenthesis or not.",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/parenthesis-checker/0",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Reverse a String using Stack",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/reverse-a-string-using-stack/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem:
          "Design a Stack that supports getMin() in O(1) time and O(1) extra space.",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/special-stack/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Find the next Greater element",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/next-larger-element/0",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "The celebrity Problem",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Arithmetic Expression evaluation",
        Done: false,
        URL: "https://www.geeksforgeeks.org/arithmetic-expression-evalution/",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Evaluation of Postfix expression",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/evaluation-of-postfix-expression/0",
      },
      {
        Topic: "Stacks & Queues",
        Problem:
          "Implement a method to insert an element at its bottom without using any other data structure.",
        Done: false,
        URL:
          "https://stackoverflow.com/questions/45130465/inserting-at-the-end-of-stack",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Reverse a stack using recursion",
        Done: false,
        URL: "https://www.geeksforgeeks.org/reverse-a-stack-using-recursion/",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Sort a Stack using recursion",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/sort-a-stack/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Merge Overlapping Intervals",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/overlapping-intervals/0",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Largest rectangular Area in Histogram",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram/0",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Length of the Longest Valid Substring",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/valid-substring0624/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Expression contains redundant bracket or not",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/expression-contains-redundant-bracket-not/",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Implement Stack using Queue",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/stack-using-two-queues/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Implement Stack using Deque",
        Done: false,
        URL: "https://www.geeksforgeeks.org/implement-stack-queue-using-deque/",
      },
      {
        Topic: "Stacks & Queues",
        Problem:
          "Stack Permutations (Check if an array is stack permutation of other)",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/stack-permutations-check-if-an-array-is-stack-permutation-of-other/",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Implement Queue using Stack  ",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/queue-using-two-stacks/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: 'Implement "n" queue in an array',
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/efficiently-implement-k-queues-single-array/",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Implement a Circular queue",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "LRU Cache Implementationa",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/lru-cache/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Reverse a Queue using recursion",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/queue-reversal/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Reverse the first “K” elements of a queue",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Interleave the first half of the queue with second half",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/interleave-first-half-queue-second-half/",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Find the first circular tour that visits all Petrol Pumps",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/circular-tour/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Minimum time required to rot all oranges",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/rotten-oranges/0",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Distance of nearest cell having 1 in a binary matrix",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1/0",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "First negative integer in every window of size “k”",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k/0",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Check if all levels of two trees are anagrams or not.",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/check-if-all-levels-of-two-trees-are-anagrams-or-not/",
      },
      {
        Topic: "Stacks & Queues",
        Problem:
          "Sum of minimum and maximum elements of all subarrays of size “k”.",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/sum-minimum-maximum-elements-subarrays-size-k/",
      },
      {
        Topic: "Stacks & Queues",
        Problem:
          "Minimum sum of squares of character counts in a given string after removing “k” characters.",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/game-with-string/0",
      },
      {
        Topic: "Stacks & Queues",
        Problem:
          "Queue based approach or first non-repeating character in a stream.",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream/0",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Next Smaller Element",
        Done: false,
        URL: "https://www.geeksforgeeks.org/next-smaller-element/",
      },
    ],




[
    {
        Topic: "Stacks & Queues",
        Problem: " Implement Stack from Scratch",
        Done: false,
        URL: "https://www.tutorialspoint.com/javaexamples/data_stack.htm",
      },
      {
        Topic: "Stacks & Queues",
        Problem: " Implement Queue from Scratch",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Implement 2 stack in an array",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "find the middle element of a stack",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/design-a-stack-with-find-middle-operation/",
      },
      {
        Topic: "Stacks & Queues",
        Problem: 'Implement "N" stacks in an Array',
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/efficiently-implement-k-stacks-single-array/",
      },
      {
        Topic: "Stacks & Queues",
        Problem:
          "Check the expression has valid or Balanced parenthesis or not.",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/parenthesis-checker/0",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Reverse a String using Stack",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/reverse-a-string-using-stack/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem:
          "Design a Stack that supports getMin() in O(1) time and O(1) extra space.",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/special-stack/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Find the next Greater element",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/next-larger-element/0",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "The celebrity Problem",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Arithmetic Expression evaluation",
        Done: false,
        URL: "https://www.geeksforgeeks.org/arithmetic-expression-evalution/",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Evaluation of Postfix expression",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/evaluation-of-postfix-expression/0",
      },
      {
        Topic: "Stacks & Queues",
        Problem:
          "Implement a method to insert an element at its bottom without using any other data structure.",
        Done: false,
        URL:
          "https://stackoverflow.com/questions/45130465/inserting-at-the-end-of-stack",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Reverse a stack using recursion",
        Done: false,
        URL: "https://www.geeksforgeeks.org/reverse-a-stack-using-recursion/",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Sort a Stack using recursion",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/sort-a-stack/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Merge Overlapping Intervals",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/overlapping-intervals/0",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Largest rectangular Area in Histogram",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram/0",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Length of the Longest Valid Substring",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/valid-substring0624/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Expression contains redundant bracket or not",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/expression-contains-redundant-bracket-not/",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Implement Stack using Queue",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/stack-using-two-queues/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Implement Stack using Deque",
        Done: false,
        URL: "https://www.geeksforgeeks.org/implement-stack-queue-using-deque/",
      },
      {
        Topic: "Stacks & Queues",
        Problem:
          "Stack Permutations (Check if an array is stack permutation of other)",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/stack-permutations-check-if-an-array-is-stack-permutation-of-other/",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Implement Queue using Stack  ",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/queue-using-two-stacks/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: 'Implement "n" queue in an array',
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/efficiently-implement-k-queues-single-array/",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Implement a Circular queue",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "LRU Cache Implementationa",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/lru-cache/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Reverse a Queue using recursion",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/queue-reversal/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Reverse the first “K” elements of a queue",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Interleave the first half of the queue with second half",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/interleave-first-half-queue-second-half/",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Find the first circular tour that visits all Petrol Pumps",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/circular-tour/1",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Minimum time required to rot all oranges",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/rotten-oranges/0",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Distance of nearest cell having 1 in a binary matrix",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1/0",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "First negative integer in every window of size “k”",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k/0",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Check if all levels of two trees are anagrams or not.",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/check-if-all-levels-of-two-trees-are-anagrams-or-not/",
      },
      {
        Topic: "Stacks & Queues",
        Problem:
          "Sum of minimum and maximum elements of all subarrays of size “k”.",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/sum-minimum-maximum-elements-subarrays-size-k/",
      },
      {
        Topic: "Stacks & Queues",
        Problem:
          "Minimum sum of squares of character counts in a given string after removing “k” characters.",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/game-with-string/0",
      },
      {
        Topic: "Stacks & Queues",
        Problem:
          "Queue based approach or first non-repeating character in a stream.",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream/0",
      },
      {
        Topic: "Stacks & Queues",
        Problem: "Next Smaller Element",
        Done: false,
        URL: "https://www.geeksforgeeks.org/next-smaller-element/",
      },
    ],
    [
      {
        Topic: "Binary Trees",
        Problem: "level order traversal",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/level-order-traversal/1",
      },
      {
        Topic: "Binary Trees",
        Problem: "Reverse Level Order traversal",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/reverse-level-order-traversal/1",
      },
      {
        Topic: "Binary Trees",
        Problem: "Height of a tree",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1",
      },
      {
        Topic: "Binary Trees",
        Problem: "Diameter of a tree",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1",
      },
      {
        Topic: "Binary Trees",
        Problem: "Mirror of a tree",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/create-a-mirror-tree-from-the-given-binary-tree/",
      },
      {
        Topic: "Binary Trees",
        Problem:
          "Inorder Traversal of a tree both using recursion and Iteration",
        Done: false,
        URL:
          "https://www.techiedelight.com/inorder-tree-traversal-iterative-recursive/",
      },
      {
        Topic: "Binary Trees",
        Problem:
          "Preorder Traversal of a tree both using recursion and Iteration",
        Done: false,
        URL:
          "https://www.techiedelight.com/preorder-tree-traversal-iterative-recursive/",
      },
      {
        Topic: "Binary Trees",
        Problem:
          "Postorder Traversal of a tree both using recursion and Iteration",
        Done: false,
        URL:
          "https://www.techiedelight.com/postorder-tree-traversal-iterative-recursive/",
      },
      {
        Topic: "Binary Trees",
        Problem: "Left View of a tree",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1",
      },
      {
        Topic: "Binary Trees",
        Problem: "Right View of Tree",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/right-view-of-binary-tree/1",
      },
      {
        Topic: "Binary Trees",
        Problem: "Top View of a tree",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
      },
      {
        Topic: "Binary Trees",
        Problem: "Bottom View of a tree",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1",
      },
      {
        Topic: "Binary Trees",
        Problem: "Zig-Zag traversal of a binary tree",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/zigzag-tree-traversal/1",
      },
      {
        Topic: "Binary Trees",
        Problem: "Check if a tree is balanced or not",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1",
      },
      {
        Topic: "Binary Trees",
        Problem: "Diagnol Traversal of a Binary tree",
        Done: false,
        URL: "https://www.geeksforgeeks.org/diagonal-traversal-of-binary-tree/",
      },
      {
        Topic: "Binary Trees",
        Problem: "Boundary traversal of a Binary tree",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1",
      },
      {
        Topic: "Binary Trees",
        Problem:
          "Construct Binary Tree from String with Bracket Representation",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/construct-binary-tree-string-bracket-representation/",
      },
      {
        Topic: "Binary Trees",
        Problem: "Convert Binary tree into Doubly Linked List",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1",
      },
      {
        Topic: "Binary Trees",
        Problem: "Convert Binary tree into Sum tree",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/transform-to-sum-tree/1",
      },
      {
        Topic: "Binary Trees",
        Problem: "Construct Binary tree from Inorder and preorder traversal",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/construct-tree-1/1",
      },
      {
        Topic: "Binary Trees",
        Problem:
          "Find minimum swaps required to convert a Binary tree into BST",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/minimum-swap-required-convert-binary-tree-binary-search-tree/",
      },
      {
        Topic: "Binary Trees",
        Problem: "Check if Binary tree is Sum tree or not",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/sum-tree/1",
      },
      {
        Topic: "Binary Trees",
        Problem: "Check if all leaf nodes are at same level or not",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/leaf-at-same-level/1",
      },
      {
        Topic: "Binary Trees",
        Problem:
          "Check if a Binary Tree contains duplicate subtrees of size 2 or more [ IMP ]",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/duplicate-subtree-in-binary-tree/1",
      },
      {
        Topic: "Binary Trees",
        Problem: "Check if 2 trees are mirror or not",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/check-mirror-in-n-ary-tree/0",
      },
      {
        Topic: "Binary Trees",
        Problem: "Sum of Nodes on the Longest path from root to leaf node ",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/sum-of-the-longest-bloodline-of-a-tree/1",
      },
      {
        Topic: "Binary Trees",
        Problem: "Check if given graph is tree or not.  [ IMP ]",
        Done: false,
        URL: "https://www.geeksforgeeks.org/check-given-graph-tree/",
      },
      {
        Topic: "Binary Trees",
        Problem: "Find Largest subtree sum in a tree",
        Done: false,
        URL: "https://www.geeksforgeeks.org/find-largest-subtree-sum-tree/",
      },
      {
        Topic: "Binary Trees",
        Problem:
          "Maximum Sum of nodes in Binary tree such that no two are adjacent ",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/maximum-sum-nodes-binary-tree-no-two-adjacent/",
      },
      {
        Topic: "Binary Trees",
        Problem: 'Print all "K" Sum paths in a Binary tree',
        Done: false,
        URL: "https://www.geeksforgeeks.org/print-k-sum-paths-binary-tree/",
      },
      {
        Topic: "Binary Trees",
        Problem: "Find LCA in a Binary tree",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1",
      },
      {
        Topic: "Binary Trees",
        Problem: "Find distance between 2 nodes in a Binary tree",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/min-distance-between-two-given-nodes-of-a-binary-tree/1",
      },
      {
        Topic: "Binary Trees",
        Problem: "Kth Ancestor of node in a Binary tree",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/kth-ancestor-node-binary-tree-set-2/",
      },
      {
        Topic: "Binary Trees",
        Problem: "Find all Duplicate subtrees in a Binary tree [ IMP ]",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/duplicate-subtrees/1",
      },
      {
        Topic: "Binary Trees",
        Problem: "Tree Isomorphism Problem",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/check-if-tree-is-isomorphic/1",
      },
    ],
    [
      {
        Topic: "Graph",
        Problem: "Create a Graph, print it",
        Done: false,
        URL: "https://1drv.ms/t/s!AqTOHFO77CqEiRua06v1PATyiFg5",
      },
      {
        Topic: "Graph",
        Problem: "Implement BFS algorithm ",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",
      },
      {
        Topic: "Graph",
        Problem: "Implement DFS Algo ",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/",
      },
      {
        Topic: "Graph",
        Problem: "Detect Cycle in Directed Graph using BFS/DFS Algo ",
        Done: false,
        URL: "https://www.geeksforgeeks.org/detect-cycle-in-a-graph/",
      },
      {
        Topic: "Graph",
        Problem: "Detect Cycle in UnDirected Graph using BFS/DFS Algo ",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",
      },
      {
        Topic: "Graph",
        Problem: "Search in a Maze",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
      },
      {
        Topic: "Graph",
        Problem: "Minimum Step by Knight",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/steps-by-knight/0",
      },
      {
        Topic: "Graph",
        Problem: "flood fill algo",
        Done: false,
        URL: "https://leetcode.com/problems/flood-fill/",
      },
      {
        Topic: "Graph",
        Problem: "Clone a graph",
        Done: false,
        URL: "https://leetcode.com/problems/clone-graph/",
      },
      {
        Topic: "Graph",
        Problem: "Making wired Connections",
        Done: false,
        URL:
          "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
      },
      {
        Topic: "Graph",
        Problem: "word Ladder ",
        Done: false,
        URL: "https://leetcode.com/problems/word-ladder/",
      },
      {
        Topic: "Graph",
        Problem: "Dijkstra algo",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/",
      },
      {
        Topic: "Graph",
        Problem: "Implement Topological Sort ",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/topological-sort/1",
      },
      {
        Topic: "Graph",
        Problem:
          "Minimum time taken by each job to be completed given by a Directed Acyclic Graph",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/minimum-time-taken-by-each-job-to-be-completed-given-by-a-directed-acyclic-graph/",
      },
      {
        Topic: "Graph",
        Problem:
          "Find whether it is possible to finish all tasks or not from given dependencies",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/",
      },
      {
        Topic: "Graph",
        Problem: "Find the no. of Isalnds",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/find-the-number-of-islands/1",
      },
      {
        Topic: "Graph",
        Problem:
          "Given a sorted Dictionary of an Alien Language, find order of characters",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/alien-dictionary/1",
      },
      {
        Topic: "Graph",
        Problem: "Implement Kruksal’sAlgorithm",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
      },
      {
        Topic: "Graph",
        Problem: "Implement Prim’s Algorithm",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/",
      },
      {
        Topic: "Graph",
        Problem: "Total no. of Spanning tree in a graph",
        Done: false,
        URL: "https://www.geeksforgeeks.org/total-number-spanning-trees-graph/",
      },
      {
        Topic: "Graph",
        Problem: "Implement Bellman Ford Algorithm",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/negative-weight-cycle/0",
      },
      {
        Topic: "Graph",
        Problem: "Implement Floyd warshallAlgorithm",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/implementing-floyd-warshall/0",
      },
      {
        Topic: "Graph",
        Problem: "Travelling Salesman Problem",
        Done: false,
        URL: "https://www.geeksforgeeks.org/travelling-salesman-problem-set-1/",
      },
      {
        Topic: "Graph",
        Problem: "Graph ColouringProblem",
        Done: false,
        URL: "https://www.geeksforgeeks.org/graph-coloring-applications/",
      },
      {
        Topic: "Graph",
        Problem: "Snake and Ladders Problem",
        Done: false,
        URL: "https://leetcode.com/problems/snakes-and-ladders/",
      },
      {
        Topic: "Graph",
        Problem: "Find bridge in a graph",
        Done: false,
        URL: "https://www.geeksforgeeks.org/bridge-in-a-graph/",
      },
      {
        Topic: "Graph",
        Problem: "Count Strongly connected Components(Kosaraju Algo)",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1",
      },
      {
        Topic: "Graph",
        Problem: "Check whether a graph is Bipartite or Not",
        Done: false,
        URL: "https://www.geeksforgeeks.org/bipartite-graph/",
      },
      {
        Topic: "Graph",
        Problem: "Detect Negative cycle in a graph",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/detect-negative-cycle-graph-bellman-ford/",
      },
      {
        Topic: "Graph",
        Problem: "Longest path in a Directed Acyclic Graph",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/find-longest-path-directed-acyclic-graph/",
      },
      {
        Topic: "Graph",
        Problem: "Journey to the Moon",
        Done: false,
        URL:
          "https://www.hackerrank.com/challenges/journey-to-the-moon/problem",
      },
      {
        Topic: "Graph",
        Problem: "Cheapest Flights Within K Stops",
        Done: false,
        URL:
          "https://leetcode.com/problems/cheapest-flights-within-k-stops/description/",
      },
      {
        Topic: "Graph",
        Problem: "Oliver and the Game",
        Done: false,
        URL:
          "https://www.hackerearth.com/practice/algorithms/graphs/topological-sort/practice-problems/algorithm/oliver-and-the-game-3/",
      },
      {
        Topic: "Graph",
        Problem: "Water Jug problem using BFS",
        Done: false,
        URL: "https://www.geeksforgeeks.org/water-jug-problem-using-bfs/",
      },
      {
        Topic: "Graph",
        Problem: "Water Jug problem using BFS",
        Done: false,
        URL: "https://www.geeksforgeeks.org/water-jug-problem-using-bfs/",
      },
      {
        Topic: "Graph",
        Problem: "Find if there is a path of more thank length from a source",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/find-if-there-is-a-path-of-more-than-k-length-from-a-source/",
      },
      {
        Topic: "Graph",
        Problem: "M-ColouringProblem",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/m-coloring-problem/0",
      },
      {
        Topic: "Graph",
        Problem:
          "Minimum edges to reverse o make path from source to destination",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/minimum-edges-reverse-make-path-source-destination/",
      },
      {
        Topic: "Graph",
        Problem: "Paths to travel each nodes using each edge(Seven Bridges)",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/paths-travel-nodes-using-edgeseven-bridges-konigsberg/",
      },
      {
        Topic: "Graph",
        Problem: "Vertex Cover Problem",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/vertex-cover-problem-set-1-introduction-approximate-algorithm-2/",
      },
      {
        Topic: "Graph",
        Problem: "Chinese Postman or Route Inspection",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/chinese-postman-route-inspection-set-1-introduction/",
      },
      {
        Topic: "Graph",
        Problem: "Number of Triangles in a Directed and Undirected Graph",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/number-of-triangles-in-directed-and-undirected-graphs/",
      },
      {
        Topic: "Graph",
        Problem:
          "Minimise the cashflow among a given set of friends who have borrowed money from each other",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/",
      },
      {
        Topic: "Graph",
        Problem: "Two Clique Problem",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/two-clique-problem-check-graph-can-divided-two-cliques/",
      },
    ],
    [
      {
        Topic: "Searching & Sorting",
        Problem:
          "Find first and last positions of an element in a sorted array",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Find a Fixed Point (Value equal to index) in a given array",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/value-equal-to-index-value1330/1",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Search in a rotated sorted array",
        Done: false,
        URL: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "square root of an integer",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/count-squares3649/1",
      },
      {
        Topic: "Searching & Sorting",
        Problem:
          "Maximum and minimum of an array using minimum number of comparisons",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/middle-of-three2926/1",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Optimum location of point to minimize total distance",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/optimum-location-point-minimize-total-distance/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Find the repeating and the missing",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "find majority element",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/majority-element/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Searching in an array where adjacent differ by at most k",
        Done: false,
        URL: "https://www.geeksforgeeks.org/searching-array-adjacent-differ-k/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "find a pair with a given difference",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/find-pair-given-difference/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "find four elements that sum to a given value",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/find-all-four-sum-numbers/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "maximum sum such that no 2 elements are adjacent",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/stickler-theif/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Count triplet with sum smaller than a given value",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "merge 2 sorted arrays",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "print all subarrays with 0 sum",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/zero-sum-subarrays/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Product array Puzzle",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/product-array-puzzle/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Sort array according to count of set bits",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/sort-by-set-bit-count/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "minimum no. of swaps required to sort the array",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/minimum-swaps/1",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Bishu and Soldiers",
        Done: false,
        URL:
          "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/bishu-and-soldiers/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Rasta and Kheshtak",
        Done: false,
        URL:
          "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/rasta-and-kheshtak/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Kth smallest number again",
        Done: false,
        URL:
          "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/kth-smallest-number-again-2/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Find pivot element in a sorted array",
        Done: false,
        URL:
          "http://theoryofprogramming.com/2017/12/16/find-pivot-element-sorted-rotated-array/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "K-th Element of Two Sorted Arrays",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Aggressive cows",
        Done: false,
        URL: "https://www.spoj.com/problems/AGGRCOW/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Book Allocation Problem",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "EKOSPOJ:",
        Done: false,
        URL: "https://www.spoj.com/problems/EKO/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Job Scheduling Algo",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/weighted-job-scheduling-log-n-time/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Missing Number in AP",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/arithmetic-number/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Smallest number with atleastn trailing zeroes infactorial",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/smallest-factorial-number5929/1",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Painters Partition Problem:",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "ROTI-Prata SPOJ",
        Done: false,
        URL: "https://www.spoj.com/problems/PRATA/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "DoubleHelix SPOJ",
        Done: false,
        URL: "https://www.spoj.com/problems/ANARC05B/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Subset Sums",
        Done: false,
        URL: "https://www.spoj.com/problems/SUBSUMS/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Findthe inversion count",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/inversion-of-array/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Implement Merge-sort in-place",
        Done: false,
        URL: "https://www.geeksforgeeks.org/in-place-merge-sort/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Partitioning and Sorting Arrays with Many Repeated Entries",
        Done: false,
        URL:
          "https://www.baeldung.com/java-sorting-arrays-with-repeated-entries",
      },
    ],
    [
      {
        Topic: "Searching & Sorting",
        Problem:
          "Find first and last positions of an element in a sorted array",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Find a Fixed Point (Value equal to index) in a given array",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/value-equal-to-index-value1330/1",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Search in a rotated sorted array",
        Done: false,
        URL: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "square root of an integer",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/count-squares3649/1",
      },
      {
        Topic: "Searching & Sorting",
        Problem:
          "Maximum and minimum of an array using minimum number of comparisons",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/middle-of-three2926/1",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Optimum location of point to minimize total distance",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/optimum-location-point-minimize-total-distance/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Find the repeating and the missing",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "find majority element",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/majority-element/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Searching in an array where adjacent differ by at most k",
        Done: false,
        URL: "https://www.geeksforgeeks.org/searching-array-adjacent-differ-k/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "find a pair with a given difference",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/find-pair-given-difference/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "find four elements that sum to a given value",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/find-all-four-sum-numbers/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "maximum sum such that no 2 elements are adjacent",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/stickler-theif/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Count triplet with sum smaller than a given value",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "merge 2 sorted arrays",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "print all subarrays with 0 sum",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/zero-sum-subarrays/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Product array Puzzle",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/product-array-puzzle/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Sort array according to count of set bits",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/sort-by-set-bit-count/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "minimum no. of swaps required to sort the array",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/minimum-swaps/1",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Bishu and Soldiers",
        Done: false,
        URL:
          "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/bishu-and-soldiers/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Rasta and Kheshtak",
        Done: false,
        URL:
          "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/rasta-and-kheshtak/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Kth smallest number again",
        Done: false,
        URL:
          "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/kth-smallest-number-again-2/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Find pivot element in a sorted array",
        Done: false,
        URL:
          "http://theoryofprogramming.com/2017/12/16/find-pivot-element-sorted-rotated-array/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "K-th Element of Two Sorted Arrays",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Aggressive cows",
        Done: false,
        URL: "https://www.spoj.com/problems/AGGRCOW/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Book Allocation Problem",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "EKOSPOJ:",
        Done: false,
        URL: "https://www.spoj.com/problems/EKO/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Job Scheduling Algo",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/weighted-job-scheduling-log-n-time/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Missing Number in AP",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/arithmetic-number/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Smallest number with atleastn trailing zeroes infactorial",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/smallest-factorial-number5929/1",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Painters Partition Problem:",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "ROTI-Prata SPOJ",
        Done: false,
        URL: "https://www.spoj.com/problems/PRATA/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "DoubleHelix SPOJ",
        Done: false,
        URL: "https://www.spoj.com/problems/ANARC05B/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Subset Sums",
        Done: false,
        URL: "https://www.spoj.com/problems/SUBSUMS/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Findthe inversion count",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/inversion-of-array/0",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Implement Merge-sort in-place",
        Done: false,
        URL: "https://www.geeksforgeeks.org/in-place-merge-sort/",
      },
      {
        Topic: "Searching & Sorting",
        Problem: "Partitioning and Sorting Arrays with Many Repeated Entries",
        Done: false,
        URL:
          "https://www.baeldung.com/java-sorting-arrays-with-repeated-entries",
      },
    ],
    [
      {
        Topic: "Dynamic Programming",
        Problem: "Coin ChangeProblem",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/coin-change2448/1",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Knapsack Problem",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem/0",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Binomial CoefficientProblem",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/ncr1019/1",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Permutation CoefficientProblem",
        Done: false,
        URL: "https://www.geeksforgeeks.org/permutation-coefficient/",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Program for nth Catalan Number",
        Done: false,
        URL: "https://www.geeksforgeeks.org/program-nth-catalan-number/",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Matrix Chain Multiplication ",
        Done: false,
        URL: "https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Edit Distance",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/edit-distance3702/1",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Subset Sum Problem",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Friends Pairing Problem",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/friends-pairing-problem5425/1",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Gold Mine Problem",
        Done: false,
        URL: "https://www.geeksforgeeks.org/gold-mine-problem/",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Assembly Line SchedulingProblem",
        Done: false,
        URL: "https://www.geeksforgeeks.org/assembly-line-scheduling-dp-34/",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Painting the Fenceproblem",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/painting-the-fence3727/1",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Maximize The Cut Segments",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/cutted-segments/0",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Longest Common Subsequence",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/longest-common-subsequence/0",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Longest Repeated Subsequence",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence/0",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Longest Increasing Subsequence",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/longest-increasing-subsequence/0",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Space Optimized Solution of LCS",
        Done: false,
        URL: "https://www.geeksforgeeks.org/space-optimized-solution-lcs/",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "LCS (Longest Common Subsequence) of three strings",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/lcs-of-three-strings/0",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Maximum Sum Increasing Subsequence",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Count all subsequences having product less than K",
        Done: false,
        URL: "https://www.geeksforgeeks.org/count-subsequences-product-less-k/",
      },
      {
        Topic: "Dynamic Programming",
        Problem:
          "Longest subsequence such that difference between adjacent is one",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/longest-subsequence-such-that-difference-between-adjacents-is-one4724/1",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Maximum subsequence sum such that no three are consecutive",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/maximum-subsequence-sum-such-that-no-three-are-consecutive/",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Egg Dropping Problem",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/egg-dropping-puzzle/0",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Maximum Length Chain of Pairs",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/max-length-chain/1",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Maximum size square sub-matrix with all 1s",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/largest-square-formed-in-a-matrix/0",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Maximum sum of pairs with specific difference",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/pairs-with-specific-difference/0",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Min Cost PathProblem",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/path-in-matrix3805/1",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Maximum difference of zeros and ones in binary string",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/maximum-difference-of-zeros-and-ones-in-binary-string4111/1",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Minimum number of jumps to reach end",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Minimum cost to fill given weight in a bag",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/minimum-cost-to-fill-given-weight-in-a-bag1956/1",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Minimum removals from array to make max –min <= K",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/minimum-removals-array-make-max-min-k/",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Longest Common Substring",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/longest-common-substring/0",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Count number of ways to reacha given score in a game",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/reach-a-given-score/0",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Count Balanced Binary Trees of Height h",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/bbt-counter/0",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "LargestSum Contiguous Subarray [V>V>V>V IMP ]",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Smallest sum contiguous subarray",
        Done: false,
        URL: "https://www.geeksforgeeks.org/smallest-sum-contiguous-subarray/",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Unbounded Knapsack (Repetition of items allowed)",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Word Break Problem",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/word-break/0",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Largest Independent Set Problem",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/largest-independent-set-problem-dp-26/",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Partition problem",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Longest Palindromic Subsequence",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Count All Palindromic Subsequence in a given String",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/count-palindromic-subsequences/1",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Longest Palindromic Substring",
        Done: false,
        URL: "https://leetcode.com/problems/longest-palindromic-substring/",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Longest alternating subsequence",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/longest-alternating-subsequence/0",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Weighted Job Scheduling",
        Done: false,
        URL: "https://www.geeksforgeeks.org/weighted-job-scheduling/",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Coin game winner where every player has three choices",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/coin-game-winner-every-player-three-choices/",
      },
      {
        Topic: "Dynamic Programming",
        Problem:
          "Count Derangements (Permutation such that no element appears in its original position) [ IMPORTANT ]",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/count-derangements-permutation-such-that-no-element-appears-in-its-original-position/",
      },
      {
        Topic: "Dynamic Programming",
        Problem:
          "Maximum profit by buying and selling a share at most twice [ IMP ]",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Optimal Strategy for a Game",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/optimal-strategy-for-a-game/0",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Optimal Binary Search Tree",
        Done: false,
        URL: "https://www.geeksforgeeks.org/optimal-binary-search-tree-dp-24/",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Palindrome PartitioningProblem",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/palindromic-patitioning4845/1",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Word Wrap Problem",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/word-wrap/0",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Mobile Numeric Keypad Problem [ IMP ]",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/mobile-numeric-keypad5456/1",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Boolean Parenthesization Problem",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/boolean-parenthesization/0",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Largest rectangular sub-matrix whose sum is 0",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/largest-rectangular-sub-matrix-whose-sum-0/",
      },
      {
        Topic: "Dynamic Programming",
        Problem:
          "Largest area rectangular sub-matrix with equal number of 1’s and 0’s [ IMP ]",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/largest-area-rectangular-sub-matrix-equal-number-1s-0s/",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Maximum sum rectangle in a 2D matrix",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/maximum-sum-rectangle/0",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Maximum profit by buying and selling a share at most k times",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/maximum-profit4657/1",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Find if a string is interleaved of two other strings",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/interleaved-strings/1",
      },
      {
        Topic: "Dynamic Programming",
        Problem: "Maximum Length of Pair Chain",
        Done: false,
        URL: "https://leetcode.com/problems/maximum-length-of-pair-chain/",
      },
    ],
    [
      {
        Topic: "Binary Search Trees",
        Problem: "Find a value in a BST",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/",
      },
      {
        Topic: "Binary Search Trees",
        Problem: "Deletion of a node in a BST",
        Done: false,
        URL: "https://leetcode.com/problems/delete-node-in-a-bst/",
      },
      {
        Topic: "Binary Search Trees",
        Problem: "Find min and max value in a BST",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/minimum-element-in-bst/1",
      },
      {
        Topic: "Binary Search Trees",
        Problem: "Find inorder successor and inorder predecessor in a BST",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1",
      },
      {
        Topic: "Binary Search Trees",
        Problem: "Check if a tree is a BST or not ",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/check-for-bst/1",
      },
      {
        Topic: "Binary Search Trees",
        Problem: "Populate Inorder successor of all nodes",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/populate-inorder-successor-for-all-nodes/1",
      },
      {
        Topic: "Binary Search Trees",
        Problem: "Find LCA  of 2 nodes in a BST",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1",
      },
      {
        Topic: "Binary Search Trees",
        Problem: "Construct BST from preorder traversal",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/construct-bst-from-given-preorder-traversa/",
      },
      {
        Topic: "Binary Search Trees",
        Problem: "Convert Binary tree into BST",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/binary-tree-to-bst/1",
      },
      {
        Topic: "Binary Search Trees",
        Problem: "Convert a normal BST into a Balanced BST",
        Done: false,
        URL: "https://www.geeksforgeeks.org/convert-normal-bst-balanced-bst/",
      },
      {
        Topic: "Binary Search Trees",
        Problem: "Merge two BST [ V.V.V>IMP ]",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/merge-two-balanced-binary-search-trees/",
      },
      {
        Topic: "Binary Search Trees",
        Problem: "Find Kth largest element in a BST",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1",
      },
      {
        Topic: "Binary Search Trees",
        Problem: "Find Kth smallest element in a BST",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/find-k-th-smallest-element-in-bst/1",
      },
      {
        Topic: "Binary Search Trees",
        Problem: 'Count pairs from 2 BST whose sum is equal to given value "X"',
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/brothers-from-different-root/1",
      },
      {
        Topic: "Binary Search Trees",
        Problem: "Find the median of BST in O(n) time and O(1) space",
        Done: false,
        URL: "https://www.geeksforgeeks.org/find-median-bst-time-o1-space/",
      },
      {
        Topic: "Binary Search Trees",
        Problem: "Count BST ndoes that lie in a given range",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1",
      },
      {
        Topic: "Binary Search Trees",
        Problem:
          "Replace every element with the least greater element on its right",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/replace-every-element-with-the-least-greater-element-on-its-right/",
      },
      {
        Topic: "Binary Search Trees",
        Problem: 'Given "n" appointments, find the conflicting appointments',
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/given-n-appointments-find-conflicting-appointments/",
      },
      {
        Topic: "Binary Search Trees",
        Problem: "Check preorder is valid or not",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/preorder-to-postorder/0",
      },
      {
        Topic: "Binary Search Trees",
        Problem: "Check whether BST contains Dead end",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/check-whether-bst-contains-dead-end/1",
      },
      {
        Topic: "Binary Search Trees",
        Problem: "Largest BST in a Binary Tree [ V.V.V.V.V IMP ]",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/largest-bst/1",
      },
      {
        Topic: "Binary Search Trees",
        Problem: "Flatten BST to sorted list",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/flatten-bst-to-sorted-list-increasing-order/",
      },
    ],
    [
      {
        Topic: "Matrix",
        Problem: "Spiral traversal on a Matrix",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix/0",
      },
      {
        Topic: "Matrix",
        Problem: "Search an element in a matriix",
        Done: false,
        URL: "https://leetcode.com/problems/search-a-2d-matrix/",
      },
      {
        Topic: "Matrix",
        Problem: "Find median in a row wise sorted matrix",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1",
      },
      {
        Topic: "Matrix",
        Problem: "Find row with maximum no. of 1's",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1",
      },
      {
        Topic: "Matrix",
        Problem:
          "Print elements in sorted order using row-column wise sorted matrix",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/sorted-matrix/0",
      },
      {
        Topic: "Matrix",
        Problem: "Maximum size rectangle",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/max-rectangle/1",
      },
      {
        Topic: "Matrix",
        Problem: "Find a specific pair in matrix",
        Done: false,
        URL: "https://www.geeksforgeeks.org/find-a-specific-pair-in-matrix/",
      },
      {
        Topic: "Matrix",
        Problem: "Rotate matrix by 90 degrees",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/",
      },
      {
        Topic: "Matrix",
        Problem: "Kth smallest element in a row-cpumn wise sorted matrix",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/kth-element-in-matrix/1",
      },
      {
        Topic: "Matrix",
        Problem: "Common elements in all rows of a given matrix",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/common-elements-in-all-rows-of-a-given-matrix/",
      },
    ],
    [
      {
        Topic: "Heap",
        Problem: "Implement a Maxheap/MinHeap using arrays and recursion.",
        Done: false,
        URL: "https://www.geeksforgeeks.org/building-heap-from-array/",
      },
      {
        Topic: "Heap",
        Problem: "Sort an Array using heap. (HeapSort)",
        Done: false,
        URL: "https://www.geeksforgeeks.org/heap-sort/",
      },
      {
        Topic: "Heap",
        Problem: "Maximum of all subarrays of size k.",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/",
      },
      {
        Topic: "Heap",
        Problem: "“k” largest element in an array",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/k-largest-elements4206/1",
      },
      {
        Topic: "Heap",
        Problem: "Kth smallest and largest element in an unsorted array",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/",
      },
      {
        Topic: "Heap",
        Problem: "Merge “K” sorted arrays. [ IMP ]",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1",
      },
      {
        Topic: "Heap",
        Problem: "Merge 2 Binary Max Heaps",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/merge-two-binary-max-heap/0",
      },
      {
        Topic: "Heap",
        Problem: "Kth largest sum continuous subarrays",
        Done: false,
        URL:
          "https://www.geeksforgeeks.org/k-th-largest-sum-contiguous-subarray/",
      },
      {
        Topic: "Heap",
        Problem: "Leetcode- reorganize strings",
        Done: false,
        URL: "https://leetcode.com/problems/reorganize-string/",
      },
      {
        Topic: "Heap",
        Problem: "Merge “K” Sorted Linked Lists [V.IMP]",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1",
      },
      {
        Topic: "Heap",
        Problem: "Smallest range in “K” Lists",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/find-smallest-range-containing-elements-from-k-lists/1",
      },
      {
        Topic: "Heap",
        Problem: "Median in a stream of Integers",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/find-median-in-a-stream/0",
      },
      {
        Topic: "Heap",
        Problem: "Check if a Binary Tree is Heap",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/is-binary-tree-heap/1",
      },
      {
        Topic: "Heap",
        Problem: "Connect “n” ropes with minimum cost",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes/0",
      },
      {
        Topic: "Heap",
        Problem: "Convert BST to Min Heap",
        Done: false,
        URL: "https://www.geeksforgeeks.org/convert-bst-min-heap/",
      },
      {
        Topic: "Heap",
        Problem: "Convert min heap to max heap",
        Done: false,
        URL: "https://www.geeksforgeeks.org/convert-min-heap-to-max-heap/",
      },
      {
        Topic: "Heap",
        Problem:
          "Rearrange characters in a string such that no two adjacent are same.",
        Done: false,
        URL:
          "https://practice.geeksforgeeks.org/problems/rearrange-characters/0",
      },
      {
        Topic: "Heap",
        Problem: "Minimum sum of two numbers formed from digits of an array",
        Done: false,
        URL: "https://practice.geeksforgeeks.org/problems/minimum-sum4058/1",
      },
    ],

];
   const [data,setData] = useState(null)
    if(data==null){
        setData(question[idx]);
        
    }
    console.log(data);
    return(
        <>
        <div className="container">
        <div className="row">

            <div className={`col-lg-12`}>
            <div className={'row'}>

                <div className={`col-lg-8 col-sm-12 ${Styles.topic}`}>
                    {arr[idx]}
                </div>
                <div className={`col-lg-4 col-sm-12 ${Styles.data}`}>
                        Total Qns. {data==null?0:data.length}
                        

                </div>
            </div>
            </div>
            {data==null?"":data.map((d)=>(
                <Card
                    name = {d.Problem}
                    link = {d.URL}
                />
            ))}
        </div>
        </div>
        <Footer></Footer>
        </>
    )
}