# getNewsList

This directory includes all the functions for getting news lists from different medias.

All files export a single `getList` function:

All them return an array of "news link" objects. Each of them is a object with the following shape:

```
{
  title
  link
}
```

Where `title` is the title of the news and `link` is the absolute URL to the news.

Note that parameters for these functions are specific to each media.
