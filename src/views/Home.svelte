<script>
  import HeroHeader from 'Organisms/Home/HeroHeader';
  import CategoriesListing from 'Organisms/Home/CategoriesListing';
</script>

<main>
  <div class="container-fluid p-0 flex-md-row flex-column chat-view d-flex">
    <div class="col-md-2 col-12 actions-column px-3 border-md-right">
      <div
        class="row m-0 d-flex justify-content-center align-items-center align-content-center"
      >
        <div class="col-md-12 h-100 mt-md-5 mt-3 mb-md-4 mb-2 p-md-0 px-5">
          <img
            src="/dist/img/logo.png"
            alt=""
            class="img-fluid m-auto border-bottom pb-4"
          />
        </div>
        <div class="col-md-10 text-center d-md-block d-none">
          <a class="d-block" href=""> Change name </a>
          <a href="/"> Logout </a>
        </div>
      </div>
    </div>
    <div class="col-md-9 col-12 content-column">
      <div class="row m-0 p-3 d-flex justify-content-center">
        <div
          class="col-10 rounded justify-content-center d-flex -search-wrapper align-items-center"
        >
          <span class="__icon">
            <svg
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 32L22 22M25.3333 13.6667C25.3333 15.1988 25.0316 16.7158 24.4453 18.1313C23.859 19.5468 22.9996 20.8329 21.9162 21.9162C20.8329 22.9996 19.5468 23.859 18.1313 24.4453C16.7158 25.0316 15.1988 25.3333 13.6667 25.3333C12.1346 25.3333 10.6175 25.0316 9.20203 24.4453C7.78656 23.859 6.50044 22.9996 5.41709 21.9162C4.33374 20.8329 3.47438 19.5468 2.88807 18.1313C2.30177 16.7158 2 15.1988 2 13.6667C2 10.5725 3.22916 7.60501 5.41709 5.41709C7.60501 3.22916 10.5725 2 13.6667 2C16.7609 2 19.7283 3.22916 21.9162 5.41709C24.1042 7.60501 25.3333 10.5725 25.3333 13.6667Z"
                stroke="#888888"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <input
            class="outline-none py-2 bg-transparent border-0 w-100 _search"
            type="search"
            autofocus
            name="search-category"
            id="search-category"
            placeholder="search for a quick text"
          />
        </div>
      </div>
      <div
        class="row m-0 -card-listing position-relative justify-content-around px-3"
      >
        <div class="uncategorized col-10 m-0 px-0" style="--index: 1">
          <h4 class="mb-3">
            <span>(1)</span>
            Uncategorized
          </h4>
          <div
            class="text-card d-flex align-items-center justify-content-between p-3 w-full rounded mb-3"
          >
            <span class="col-11 _text-wrapper m-0">
              <p class="text-break __text m-0">
                Who can it be knocking at my door? Make no sound, tip-toe across
                the floor If he hears, he'll knock all day I'll be trapped and
                here I'll have to stay
                <br />
                <br />
                I've done no harm, I keep to myself There's nothing wrong with my
                state of mental health I like it here with my childhood friend Here
                they come, those feelings again!
              </p>
            </span>
            <span>
              <button class="border-0 bg-transparent p-0 m-0">
                <svg
                  class="__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V14C21 14.5304 20.7893 15.0391 20.4142 15.4142C20.0391 15.7893 19.5304 16 19 16H14L9 21V16Z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
        <div
          class="col-10 rounded px-0 mb-4 category-card card border-0"
          style="--index: 2"
        >
          <div class="card-header border-0 p-3 w-100">
            <h4 class="d-inline align-top"><span> (3) </span> Beck</h4>
          </div>
          <div class="card-body --card-listing overflow-auto px-3">
            <div
              class="text-card d-flex align-items-center justify-content-between p-3 rounded mb-3"
            >
              <span class="col-11 _text-wrapper m-0">
                <p class="text-break __text m-0">
                  Woke up this morning, found a love light in the storm. Looked
                  up this morning, saw the roses full of thorns Guns are
                  falling, they don't have nowhere to go. Oceans of diamonds
                  always shine, smooth out below Woke up this morning, found a
                  love light in the storm.
                  <br />
                  <br />
                  Looked up this morning, saw the roses full of thorns Guns are falling,
                  they don't have nowhere to go. Oceans of diamonds always shine,
                  smooth out below morning, found a
                  <br />
                  love light in the storm. Looked up this morning, saw the roses
                  full of thorns Guns are falling, they don't have nowhere to go.
                  Oceans of diamonds always shine, smooth out below
                </p>
              </span>
              <span>
                <button class="border-0 bg-transparent p-0 m-0">
                  <svg
                    class="__icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V14C21 14.5304 20.7893 15.0391 20.4142 15.4142C20.0391 15.7893 19.5304 16 19 16H14L9 21V16Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </span>
            </div>
            <div
              class="text-card d-flex align-items-center justify-content-between p-3 rounded mb-3"
            >
              <span class="col-11 _text-wrapper m-0">
                <p class="text-break __text m-0">
                  I move away from this place In the form of a disturbance And
                  enter into the world Like some tiny distortion If I surrender
                  And I don't fight this wave I won't go under I'll only get
                  carried away
                  <br />
                </p>
              </span>
              <span>
                <button class="border-0 bg-transparent p-0 m-0">
                  <svg
                    class="__icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V14C21 14.5304 20.7893 15.0391 20.4142 15.4142C20.0391 15.7893 19.5304 16 19 16H14L9 21V16Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div
          class="col-10 rounded px-0 mb-4 category-card card border-0"
          style="--index: 3"
        >
          <div class="card-header border-0 p-3 w-100">
            <h4 class="d-inline"><span> (2) </span> Daft punk</h4>
          </div>
          <div class="card-body --card-listing overflow-auto px-3">
            <div
              class="text-card d-flex align-items-center justify-content-between p-3 rounded mb-3"
            >
              <span class="col-11 _text-wrapper m-0">
                <p class="text-break __text m-0">
                  One thing I never see the same when you're 'round I don't
                  believe in him, his lips on the ground I wanna take you to
                  that place in the "Roche" But no one gives us any time anymore
                  He asks me once if I'd look in on his dog

                  <br />
                  <br />
                  You made an offer for it, then you ran off I got this picture of
                  us kids in my head And all I hear is the last thing that you said
                </p>
              </span>
              <span>
                <button class="border-0 bg-transparent p-0 m-0">
                  <svg
                    class="__icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V14C21 14.5304 20.7893 15.0391 20.4142 15.4142C20.0391 15.7893 19.5304 16 19 16H14L9 21V16Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </span>
            </div>
            <div
              class="text-card d-flex align-items-center justify-content-between p-3 rounded mb-3"
            >
              <span class="col-11 _text-wrapper m-0">
                <p class="text-break __text m-0">
                  Work it harder, make it better Do it faster, makes us stronger
                  More than ever, hour after hour Work is never over,Harder
                  Better Faster Stronger
                </p>
              </span>
              <span>
                <button class="border-0 bg-transparent p-0 m-0">
                  <svg
                    class="__icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V14C21 14.5304 20.7893 15.0391 20.4142 15.4142C20.0391 15.7893 19.5304 16 19 16H14L9 21V16Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div
          style="--index: 4"
          class="col-10 rounded px-0 mb-4 category-card card border-0"
        >
          <div class="card-header border-0 p-3 w-100">
            <h4 class="d-inline align-top">
              <span class="align-top d-inline-block"> (3) </span>
              Andrew Bird
            </h4>
          </div>
          <div class="card-body --card-listing overflow-auto px-3">
            <div
              class="text-card d-flex align-items-center justify-content-between p-3 rounded mb-3"
            >
              <span class="col-11 _text-wrapper m-0">
                <p class="text-break __text m-0">
                  I paint you a picture, but it never looks right, cause I fill
                  in the shadows and block out the, I block out the light
                </p>
              </span>
              <span>
                <button class="border-0 bg-transparent p-0 m-0">
                  <svg
                    class="__icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V14C21 14.5304 20.7893 15.0391 20.4142 15.4142C20.0391 15.7893 19.5304 16 19 16H14L9 21V16Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </span>
            </div>
            <div
              class="text-card d-flex align-items-center justify-content-between p-3 rounded mb-3"
            >
              <span class="col-11 _text-wrapper m-0">
                <p class="text-break __text m-0">
                  You need a witness just to know you're there From the tips of
                  your fingers, every strand of hair You know someone's watching
                  you watching me watching you And all that we look upon You may
                  not know me but you feel my stare
                </p>
              </span>
              <span>
                <button class="border-0 bg-transparent p-0 m-0">
                  <svg
                    class="__icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V14C21 14.5304 20.7893 15.0391 20.4142 15.4142C20.0391 15.7893 19.5304 16 19 16H14L9 21V16Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </span>
            </div>
            <div
              class="text-card d-flex align-items-center justify-content-between p-3 rounded mb-3"
            >
              <span class="col-11 _text-wrapper m-0">
                <p class="text-break __text m-0">
                  And when you wake up, another sunrise Another break up, this
                  ship is capsized And when you wake up, another sunrise Another
                  break up, this ship is capsized
                  <br />
                  <br />
                  Sky's falling, no one is on your side Spoon dirty laundry, darling
                  you're all alone Spoon dirty laundry, darling you're all alone
                  Spoon dirty laundry, darling you're all alone
                </p>
              </span>
              <span>
                <button class="border-0 bg-transparent p-0 m-0">
                  <svg
                    class="__icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V14C21 14.5304 20.7893 15.0391 20.4142 15.4142C20.0391 15.7893 19.5304 16 19 16H14L9 21V16Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="col-md-1 text-dark text-center p-3 chat-column fs-5 overflow-auto"
    >
      <div class="card border-0 py-4 mb-3">
        <p class="m-auto">Hello, Im just a card mock</p>
      </div>
      <div class="card border-0 py-4 mb-3">
        <p class="m-auto">pretend I'm not here</p>
      </div>
      <div class="card border-0 py-4 mb-3">
        <p class="m-auto">pretend I'm not here</p>
      </div>
      <div class="card border-0 py-4 mb-3">
        <p class="m-auto">pretend I'm not here</p>
      </div>
      <div class="card border-0 py-4 mb-3">
        <p class="m-auto">pretend I'm not here</p>
      </div>
    </div>
  </div>
</main>

<style lang="scss">
  .product-list h2 {
    text-decoration: underline #f4d316;
  }

  $alpha-color: #b99309;
  .login-view {
    ._login-form {
      animation: fadeInUp 1s 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
        alternate backwards;
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(0.4rem);
        }
      }
      input {
        background-color: #3f3f3f;
        color: #cccccc;
        outline: none;
        box-shadow: none;
        transition: all ease-out 0.5s;
        &:focus {
          transition: all ease-in 0.5s;
          box-shadow: 3px 3px 15px #b9930950;
        }
      }
      button {
        background-color: $alpha-color;
        color: #eee;
      }
    }
    .content-column {
      background-image: url(/dist/img/chat-icon.svg);
      background-position: center center;
      background-size: 15rem;
      min-height: 100%;
      background-repeat: no-repeat;
    }
  }

  .chat-view {
    .uncategorized {
      animation: fadeInUp 0.5s 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955)
        backwards;
      color: $alpha-color;
    }
    .text-card {
      color: #000;
      background-color: #dedede;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
      transition: all ease-out 0.5s;
      &:hover {
        transition: all ease-in 0.4s;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.11);
      }
      ._text-wrapper {
        transition: all ease-out 0.5s;
        background-color: transparent;
        .__text::selection {
          transition: all ease-in 0.4s;
          background-color: $alpha-color;
          font-weight: 800;
          border-radius: 25px;
        }
      }
      .__icon {
        cursor: pointer;
        stroke: #000;
        transition: all ease-out 0.5s;
        stroke-width: 1.7;
        width: 1.7rem;
        @media screen and (min-width: 800px) {
          width: 2.2rem;
        }
        &:hover {
          transform: scale(1.04);
          transition: all ease-in 0.4s;
          stroke: $alpha-color;
          stroke-width: 2.2;
        }
      }

      animation: fadeIn 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) backwards;
      animation-delay: calc(0.75s * var(--index));
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(0.2rem);
        }
      }
    }
    .content-column {
      max-height: fit-content;
      overflow-y: auto;
      .-search-wrapper {
        background-color: #c4c4c4;
        color: #888888;
        box-shadow: 3px 5px 4px 0px rgba(0, 0, 0, 0.068);
        transition: all ease-out 0.5s;
        &:hover {
          transition: all ease-in 0.5s;
          box-shadow: 3px 5px 15px 0px rgba(0, 0, 0, 0.103);
        }
        .__icon {
          width: 1.5rem;
          margin-right: 1rem;
        }
        animation: fadeInDown 0.5s 0.3s ease-in both;
      }
      .-card-listing {
        .category-card {
          background-color: #f1f1f1;
          box-shadow: 3px 5px 4px 0px rgba(0, 0, 0, 0.3);
          transition: all ease-out 0.5s;
          &:hover {
            transition: all ease-in 0.5s;
            box-shadow: 3px 5px 35px 0px rgba(0, 0, 0, 0.3);
          }

          .card-header {
            color: $alpha-color;
            background-color: #000;
          }
          .--card-listing {
            max-height: 20rem;
          }

          animation: fadeInUp 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955)
            backwards;
          animation-delay: calc(0.6s * var(--index));
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(0.4rem);
            }
          }
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-0.2rem);
            }
          }
        }
      }
    }
  }
  :root {
    font-family: 'Roboto', sans-serif;
    h1,
    h2 {
      font-weight: 900;
    }
    h3,
    h4 {
      font-weight: 700;
    }
    h3,
    h4 {
      font-weight: 600;
    }
    p,
    span {
      font-weight: 300;
    }

    span {
      font-weight: 500;
    }
    small {
      font-weight: 400;
    }
    button {
      font-weight: 600;
    }
    input {
      outline: none;
    }
    a {
      text-decoration: none;
      color: $alpha-color;
      transition: all ease-out 0.5s;
      font-weight: 500;
      &:hover {
        font-weight: 600;
        text-decoration: underline;
        transition: all ease-in 0.5s;
      }
    }
  }

  html {
    background-color: #3f3f3f !important;
  }
  main {
    background-color: #3f3f3f !important;
    .chat-column {
      background-color: #000;
    }
    & > div {
      color: #eee;
      @media screen and (min-width: 780px) {
        height: 100vh;
      }
    }

    .actions-column {
      animation: shadowIn 0.5s ease-in alternate;
      @keyframes shadowIn {
        0% {
          transform: translateX(-0.5rem);
          box-shadow: 0 0 0 black;
          opacity: 0.4;
          border-right: 0.1rem solid transparent;
        }
        100% {
          box-shadow: 5px 10px 8px #00000050;
        }
      }
      border-color: #eee;
      min-height: 100%;
      border-right: 0.1rem solid;
      background-color: #000000;
      box-shadow: 5px 10px 8px #00000050;
      transition: all ease-out 0.5s;
      &:hover {
        box-shadow: 5px 10px 15px #00000088;
        transition: all ease-in 0.5s;
      }
    }
  }
</style>
