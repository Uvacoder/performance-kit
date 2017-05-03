# Hidden Images

## Introduction
Some website have functionality where they can hide components on a website using the CMS. Maybe the image is set to `display: none;` at a certain breakpoint in the code. Something we as developers tend to forget that the image is still loading in our browser making it very slow for the breakpoint used to hide the image. There are many factors to why this can happen such as time contraints, just doing a quick fix/change or lack of understanding of what will happen if its done that way.

Even though these images are hidden visually, they are still being requested & downloaded by the browser. I call this wasteful page weight.

## Senario: Navigation Images

In some senarios, we may need to hide an image for a certain breakpoint. Sometimes we might get something like this:

`On mobile I would like to see no images in the navigation but have images displaying on desktop...` - I know right :persevere:

So our html would look something like this:

```html

<!--
	Nav items
-->

<li>
	<a href="/">
		<img src="/_assets/images/image-home.jpg" alt="My Image" class="image image--hidden-mobile"/>
		Home
	</a>
</li>
<li>
	<a href="/about">
		<img src="/_assets/images/image-about.jpg" alt="My Image" class="image image--hidden-mobile"/>
		About
	</a>
</li>
```

## The Problem

- Creating wasteful page weight on mobile
- Adding a wasted http requests to the page

![Before network panel in developer tools](https://raw.githubusercontent.com/code-mattclaffey/performance-kit/master/hidden-images/screenshots/before-html-network.png)

## The Solution
So lets say each image is around 85kb-95kb & imagine there are 10 nav items. THAT'S 850kb-950kb loading on mobile which is complete waste & its a render blocking resource. :worried:

We can use the picture element to our advantage here using a source element like so:

```html
<li>
	<a href="/">
		<picture>
			<source srcset="/_assets/images/image-home.jpg" media="(min-width: 30em)">
			<source srcset="/_assets/images/image-hidden.jpg" media="(max-width: 30em)">
			<img src="/_assets/images/image-home.jpg" alt="My Image"/>
		</picture>
		Home
	</a>
</li>
<li>
	<a href="/about">
		<picture>
			<source srcset="/_assets/images/image-about.jpg" media="(min-width: 30em)">
			<source srcset="/_assets/images/image-hidden.jpg" media="(max-width: 30em)">
			<img src="/_assets/images/image-about.jpg" alt="My Image"/>
		</picture>
		About
	</a>
</li>

```

Now we have a hidden image which is around 1.4kb & we have also reduced the image requests too.

![Before network panel in developer tools](https://raw.githubusercontent.com/code-mattclaffey/performance-kit/master/hidden-images/screenshots/after-html-network.png)

[Example of it in use - before.html](https://raw.githubusercontent.com/code-mattclaffey/performance-kit/master/hidden-images/before.html)

[Example of it in use - after.html](https://raw.githubusercontent.com/code-mattclaffey/performance-kit/master/hidden-images/after.html)
