```javascript
// Example showing an unexpected behavior in Tailwind CSS

<div class="bg-red-500 p-4">
  <div class="float-right">
    This div should be floated to the right.
  </div>
</div>
```

This code snippet is expected to display a red div with inner content floated to the right, but it doesn't due to parent element's `overflow` property defaulting to `visible`.

