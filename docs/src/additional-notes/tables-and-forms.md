# Tables And Forms

If you ever need to add tables or form elements to the content of your articles, you can easily do so by using the HTML card that the editor provides. You can see a demo in the [Style Guide](https://firma.eduardogomez.io/style-guide/).

## Tables

If you want to add a table, you should use HTML code similar to this one:

```html
<div class="f-table-container">
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Heading</th>
        <th>Heading</th>
        <th>Heading</th>
        <th>Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>
```

The container with the class `f-table-container` is important, please do not forget about it.

## Form Elements

Firma comes with styles for these form elements:

* Button
* Input text
* Textarea
* Select
* Checkbox
* Radio button

### Button

For a button or a link to have the styles of the theme you must add the `f-button` class to the element. That is the base class of a button, if you want the button to be prominent you can add the `primary` class, you can also add the `medium` or `large` class if you want the button to be bigger.

Examples:

```html
<!-- Button -->
<button class="f-button">
  Regular button example
</button>

<!-- Link -->
<a href="#" class="f-button">
  Regular link example
</a>

<!-- Primary style -->
<a href="#" class="f-button primary">
  Primary link example
</a>

<!-- Medium style -->
<a href="#" class="f-button primary medium">
  Medium size example
</a>

<!-- Large style -->
<a href="#" class="f-button primary large">
  Large size example
</a>
```

### Input text and Textarea

These elements already have styles defined out of the box so it's not necessary to do anything special to make them look as they appear in the style guide.

### Select

To add a **select** element correctly you should use a code like this one:

```html
<div class="f-select-container">
  <select name="select-example" id="select-example">
    <option value="1">First option</option>
    <option value="2">Second option</option>
    <option value="3">Third option</option>
  </select>
  <span class="icon-chevron-down" aria-hidden="true"></span>
</div>
```

The container with the class `f-select-container` is important, as well as the `span` element with the class `icon-chevron-down`.

### Checkbox and Radio button

To add a **checkbox** or a **radio button** element correctly you should use some code like this one:

```html
<!-- Checkbox -->
<label class="input-checkbox">
  <div>
    <input type="checkbox" name="checkbox-example" id="checkbox-example-1" value="1">
    <span></span>
  </div>
  Checkbox option
</label>

<!-- Radio button -->
<label class="input-radio">
  <div>
    <input type="radio" name="radio-example" id="radio-example-1" value="1">
    <span></span>
  </div>
  Input radio option
</label>
```

Please use an identical structure as shown in the examples, the class `input-checkbox` and `input-radio` matter. The tags `label`, `div` and `span` also matter and should remain in that order.

::: warning
The styles of tables and form elements only work in the body of a post or a regular page.
:::
