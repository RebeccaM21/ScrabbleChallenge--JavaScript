# SCRABBLE CHALLENGE 

<!-- ABOUT THE PROJECT -->
## About The Project

I completed this project as the first challenge prior to the Digital Futures Academy. The aim of the project was to create a program that given a word, it can compute the scrabble score for the word. Below were the requirments for the challenge, given by the Digital Futures Academy. 

##### Letter Values

You'll need these:

| Letter                        | Value  |
| ----                          |  ----  |
| A, E, I, O, U, L, N, R, S, T  |     1  |
| D, G                          |     2  |
| B, C, M, P                    |     3  |
| F, H, V, W, Y                 |     4  |
| K                             |     5  |
| J, X                          |     8  |
| Q, Z                          |     10 |

Example
"cabbage" should be scored as worth 14 points:

- 3 points for C
- 1 point for A, twice
- 3 points for B, twice
- 2 points for G
- 1 point for E

And to total:

```
3 + 2x1 + 2x3 + 2 + 1
= 3 + 2 + 6 + 3
= 14
```

## Acceptance Criteria

```javascript
let scrabble = new Scrabble('')
scrabble.score() // => 0

let scrabble = new Scrabble(" \t\n")
scrabble.score() // => 0

let scrabble = new Scrabble(null)
scrabble.score() // => 0

let scrabble = new Scrabble('a')
scrabble.score() // => 1

let scrabble = new Scrabble('f')
scrabble.score() // => 4

let scrabble = new Scrabble('street')
scrabble.score() // => 6

let scrabble = new Scrabble('quirky')
scrabble.score() // => 22

let scrabble = new Scrabble('OXYPHENBUTAZONE')
scrabble.score() // => 41
```

## Extended Acceptance Criteria
> Each `Scrabble` method should be no more than 5 lines and contain no more than 5 operations.

> You can play a double or a triple letter.

> You can play a double or a triple word.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

[![JavaScript][JavaScript.com]][JavaScript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

## Learning Objectives
- Build a simple program using functions, loops, and flow control
- Use `git` & GitHub to commit work and open a Pull Request

### Challenge Instructions

1. Fork this repository and then:
```sh
$ git clone https://github.com/digital-futures-academy/scrabble-challenge.git && cd scrabble-challenge
$ npm install # installs dependencies listed in package.json
```
2. Run the tests from your project root directory. There should be a lot of failures to begin with. You can run your test suite in a few ways:
```sh
$ npm test
# or
$ jasmine
# or run jasmine directly
$ ./node_modules/jasmine/bin/jasmine.js
```
3. In GitHub, [open a Pull Request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) from your forked repository to the challenge repository.
4. Implement the criteria below locally and [push your code](https://docs.github.com/en/github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line) to your repository! Every push to a branch that has an open Pull Request will update it automatically with your changes.
5. Check the status of the automated tests on the Pull Request - update your implementation if needed.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run Tests
   ```sh
   npm test
   ```

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: https://user-images.githubusercontent.com/99371800/196669089-84920671-415c-4d80-b3c7-1d732a4ca442.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[JavaScript.com]: https://img.icons8.com/color/48/000000/javascript--v1.png
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript

