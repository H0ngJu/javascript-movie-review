var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _footer, _button, _onClick, _bindEvent, _container, _data, _MainBanner_instances, detailButtonElement_fn, _container2, _data2, _MovieItem_instances, matchImgUrl_fn, _container3, _errorMessage, _container4, _movieItems, _MovieGrid_instances, emptyListElement_fn, movieItemElements_fn, _container5, _text, _container6, _movieListData, _currentPage, _isLoading, _MainPage_instances, titleElement_fn, mainBannerElement_fn, movieGridElement_fn, loadMoreButtonElement_fn, _loadMoreData, _container7, _movieListData2, _isLoading2, _query, _currentPage2, _totalPage, _SearchPage_instances, movieGridElement_fn2, loadMoreButtonElement_fn2, _loadMoreData2, titleElement_fn2, _container8, _container9, _searchValue, _SearchBar_instances, bindInputEvent_fn, bindEnterEvent_fn, bindSearchIconEvent_fn, search_fn, bindEvent_fn, _container10, _searchBar, _Header_instances, bindLogoClickEvent_fn, _container11, _header, _footer2, _contentContainer;
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
class Footer {
  constructor() {
    __privateAdd(this, _footer);
    __privateSet(this, _footer, document.createElement("footer"));
    __privateGet(this, _footer).className = "footer";
    this.render();
  }
  render() {
    __privateGet(this, _footer).innerHTML = `
        <p><img src="https://h0ngju.github.io/javascript-movie-review/woowacourse_logo.png" width="180" /></p>
        <p>&copy; 우아한테크코스 All Rights Reserved.</p>
      `;
  }
  get element() {
    return __privateGet(this, _footer);
  }
}
_footer = new WeakMap();
class Button {
  constructor({ cssType, innerText, onClick }) {
    __privateAdd(this, _button);
    __privateAdd(this, _onClick);
    __privateAdd(this, _bindEvent, () => {
      __privateGet(this, _button).addEventListener("click", () => {
        __privateGet(this, _onClick).call(this);
      });
    });
    __privateSet(this, _button, document.createElement("button"));
    __privateGet(this, _button).classList.add(`button--${cssType}`);
    __privateGet(this, _button).classList.add(`text-button--${cssType}`);
    __privateGet(this, _button).innerText = innerText;
    __privateSet(this, _onClick, onClick);
    __privateGet(this, _bindEvent).call(this);
  }
  get element() {
    return __privateGet(this, _button);
  }
}
_button = new WeakMap();
_onClick = new WeakMap();
_bindEvent = new WeakMap();
class MainBanner {
  constructor({ data }) {
    __privateAdd(this, _MainBanner_instances);
    __privateAdd(this, _container);
    __privateAdd(this, _data);
    __privateSet(this, _container, document.createElement("div"));
    __privateGet(this, _container).classList.add("main-banner");
    __privateSet(this, _data, data);
    this.render();
  }
  render() {
    __privateGet(this, _container).innerHTML = `
           <div class="overlay" aria-hidden="true">
             <img class = "main-banner__image" src=${__privateGet(this, _data).imgUrl} alt=${__privateGet(this, _data).title}/>
           </div>
           
        <div class="main-banner__info">
           <div class="main-banner__rate">
                <img src="https://h0ngju.github.io/javascript-movie-review/star_empty.png" class="main-banner__rating-star" />
                <span class="main-banner__rate-value text-subtitle">${__privateGet(this, _data).score}</span>
            </div>
              <div class="main-banner__title text-title">${__privateGet(this, _data).title}</div>
              <div class="main-banner__button">${__privateMethod(this, _MainBanner_instances, detailButtonElement_fn).call(this)}</div>
        </div>`;
  }
  get element() {
    return __privateGet(this, _container);
  }
}
_container = new WeakMap();
_data = new WeakMap();
_MainBanner_instances = new WeakSet();
detailButtonElement_fn = function() {
  return new Button({ cssType: "small", innerText: "자세히 보기", onClick: () => {
  } }).element.outerHTML;
};
class MovieItem {
  constructor({ data }) {
    __privateAdd(this, _MovieItem_instances);
    __privateAdd(this, _container2);
    __privateAdd(this, _data2);
    __privateSet(this, _container2, document.createElement("li"));
    __privateSet(this, _data2, data);
    this.render();
  }
  render() {
    __privateGet(this, _container2).innerHTML = `
      <div class="item">
        <img class="thumbnail" src=${__privateMethod(this, _MovieItem_instances, matchImgUrl_fn).call(this)} alt=${__privateGet(this, _data2).title}/>
        <div class="item-desc">
          <p class="rate">
            <img src="/star_empty.png" class="star" />
            <span>${__privateGet(this, _data2).score}</span>
          </p>
          <strong class = 'text-body'>${__privateGet(this, _data2).title}</strong>
        </div>
      </div>`;
  }
  get element() {
    return __privateGet(this, _container2);
  }
}
_container2 = new WeakMap();
_data2 = new WeakMap();
_MovieItem_instances = new WeakSet();
matchImgUrl_fn = function() {
  if (__privateGet(this, _data2).imgUrl.includes("null")) {
    return "https://h0ngju.github.io/javascript-movie-review/empty-item.png";
  }
  return __privateGet(this, _data2).imgUrl;
};
const ERROR_MESSAGE = {
  NO_RESULT: "저런! 검색 결과가 없네요 😅",
  FETCH_FAILED: "서버에서 데이터를 불러 오는데 실패했어요 😭"
};
class ErrorMessage {
  constructor({ errorMessage }) {
    __privateAdd(this, _container3);
    __privateAdd(this, _errorMessage);
    __privateSet(this, _container3, document.createElement("div"));
    __privateGet(this, _container3).classList.add("empty-result");
    __privateSet(this, _errorMessage, errorMessage);
    this.render();
  }
  render() {
    __privateGet(this, _container3).innerHTML = `
        <img src="https://h0ngju.github.io/javascript-movie-review/no-result.png" alt="으아아 행성이"/>
        <p class="text-subtitle">${__privateGet(this, _errorMessage)}</p>
    `;
  }
  get element() {
    return __privateGet(this, _container3);
  }
}
_container3 = new WeakMap();
_errorMessage = new WeakMap();
class MovieGrid {
  constructor({ movieItems = [] }) {
    __privateAdd(this, _MovieGrid_instances);
    __privateAdd(this, _container4);
    __privateAdd(this, _movieItems);
    __privateSet(this, _container4, document.createElement("main"));
    __privateSet(this, _movieItems, movieItems);
    this.render();
  }
  render() {
    if (__privateGet(this, _movieItems).length !== 0) {
      __privateGet(this, _container4).innerHTML = `
      <ul class="thumbnail-list">
      ${__privateMethod(this, _MovieGrid_instances, movieItemElements_fn).call(this)};
      </ul>`;
      return;
    }
    __privateGet(this, _container4).innerHTML = __privateMethod(this, _MovieGrid_instances, emptyListElement_fn).call(this);
  }
  get element() {
    return __privateGet(this, _container4);
  }
}
_container4 = new WeakMap();
_movieItems = new WeakMap();
_MovieGrid_instances = new WeakSet();
emptyListElement_fn = function() {
  return new ErrorMessage({ errorMessage: ERROR_MESSAGE.NO_RESULT }).element.outerHTML;
};
movieItemElements_fn = function() {
  return __privateGet(this, _movieItems).map((movieItem) => new MovieItem({ data: movieItem }).element.outerHTML).join("");
};
class Title {
  constructor({ text }) {
    __privateAdd(this, _container5);
    __privateAdd(this, _text);
    __privateSet(this, _container5, document.createElement("h2"));
    __privateSet(this, _text, text);
    this.render();
  }
  render() {
    __privateGet(this, _container5).innerText = `${__privateGet(this, _text)}`;
  }
  get element() {
    return __privateGet(this, _container5);
  }
}
_container5 = new WeakMap();
_text = new WeakMap();
const SYSTEM_CONSTANTS = Object.freeze({
  BASE_IMG_URL: "https://image.tmdb.org/t/p/w500",
  SEARCH_URL: (searchValue, page) => `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=ko-KR&include_adult=false&page=${page}`,
  MAIN_URL: (page) => `https://api.themoviedb.org/3/movie/popular?language=ko-KR&include_adult=false&page=${page}`
});
async function extractedeData(url) {
  const movieJSON = await fetchMovieList(url);
  const movieListData = movieJSON.results.map((movieItem) => ({
    title: movieItem.title,
    imgUrl: `${SYSTEM_CONSTANTS.BASE_IMG_URL}${movieItem.poster_path}`,
    score: Number(movieItem.vote_average.toFixed(1))
  }));
  const totalPage = movieJSON.total_pages;
  return { movieListData, totalPage };
}
async function fetchMovieList(url) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mjg2NjAzNjJjNTFlZDdiYmFhYTY0ZjJiNDA1N2RjMCIsIm5iZiI6MTc0MjI3ODUwNy42NDMwMDAxLCJzdWIiOiI2N2Q5MGY2YmMwNTY2YTEwMGEwODgwYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PJb_lmB5uMCu2xFnSHsP_USp8A6S7CI5rL8l_6u1euk"}`
    }
  };
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json;
  } catch (err) {
    if (err instanceof Error) {
      redirectToPage("/error");
    }
  }
}
const skeletonItems$1 = Array(20).fill("").map(
  () => `
  <li>
    <div class="item">
      <img class="thumbnail skeleton" >
      <div class="item-desc">
        <p class="skeleton">
          <img src="" class="">
          <span class="skeleton"></span>
        </p>
        <strong class="item-title skeleton"></strong>
      </div>
    </div>
  </li>
`
).join("");
const mainPageLoadingTemplate = `
  <div class="render-content">
    <div class="main-page">
      <div class="main-banner">
        <div class="overlay" aria-hidden="true">
          <img class="main-banner__image skeleton" >
        </div>

        <div class="main-banner__info">
          <div class="main-banner__rate">
            <img src="" class="">
            <span class="main-banner__rate-value text-subtitle"></span>
          </div>
          <div class="main-banner__title text-title"></div>
        </div>
      </div>

      <div>
        <h2 class="title">지금 인기 있는 영화</h2>
      </div>

      <main>
        <ul class="thumbnail-list">
          ${skeletonItems$1}
        </ul>
      </main>
    </div>
  </div>
`;
class MainPage {
  constructor() {
    __privateAdd(this, _MainPage_instances);
    __privateAdd(this, _container6);
    __privateAdd(this, _movieListData, []);
    __privateAdd(this, _currentPage, 1);
    __privateAdd(this, _isLoading, true);
    __privateAdd(this, _loadMoreData, async () => {
      __privateSet(this, _currentPage, __privateGet(this, _currentPage) + 1);
      const { movieListData } = await extractedeData(SYSTEM_CONSTANTS.MAIN_URL(__privateGet(this, _currentPage)));
      __privateSet(this, _movieListData, movieListData);
      this.renderDynamicSection();
    });
    __privateSet(this, _container6, document.createElement("div"));
    __privateGet(this, _container6).classList.add("main-page");
    this.init();
  }
  async init() {
    __privateSet(this, _isLoading, true);
    this.render();
    const { movieListData } = await extractedeData(SYSTEM_CONSTANTS.MAIN_URL(__privateGet(this, _currentPage)));
    __privateSet(this, _movieListData, movieListData);
    __privateSet(this, _isLoading, false);
    this.render();
  }
  render() {
    __privateGet(this, _container6).innerHTML = "";
    if (__privateGet(this, _isLoading)) {
      __privateGet(this, _container6).innerHTML = mainPageLoadingTemplate;
      return;
    }
    __privateGet(this, _container6).appendChild(__privateMethod(this, _MainPage_instances, mainBannerElement_fn).call(this));
    __privateGet(this, _container6).appendChild(__privateMethod(this, _MainPage_instances, titleElement_fn).call(this));
    this.renderDynamicSection();
  }
  renderDynamicSection() {
    const loadMoreButton = document.querySelector(".button--medium");
    if (loadMoreButton) {
      loadMoreButton.remove();
    }
    __privateGet(this, _container6).appendChild(__privateMethod(this, _MainPage_instances, movieGridElement_fn).call(this));
    __privateGet(this, _container6).appendChild(__privateMethod(this, _MainPage_instances, loadMoreButtonElement_fn).call(this));
  }
  get element() {
    return __privateGet(this, _container6);
  }
}
_container6 = new WeakMap();
_movieListData = new WeakMap();
_currentPage = new WeakMap();
_isLoading = new WeakMap();
_MainPage_instances = new WeakSet();
titleElement_fn = function() {
  return new Title({ text: "지금 인기 있는 영화" }).element;
};
mainBannerElement_fn = function() {
  return new MainBanner({ data: __privateGet(this, _movieListData)[0] }).element;
};
movieGridElement_fn = function() {
  return new MovieGrid({ movieItems: __privateGet(this, _movieListData) }).element;
};
loadMoreButtonElement_fn = function() {
  return new Button({ cssType: "medium", innerText: "더보기", onClick: __privateGet(this, _loadMoreData) }).element;
};
_loadMoreData = new WeakMap();
const skeletonItems = Array(20).fill("").map(
  () => `
  <li>
    <div class="item">
      <img class="thumbnail skeleton" >
      <div class="item-desc">
        <p class="skeleton">
          <img src="" class="">
          <span class="skeleton"></span>
        </p>
        <strong class="item-title skeleton"></strong>
      </div>
    </div>
  </li>
`
).join("");
const searchPageLoadingTemplate = (searchInput) => {
  return `
  <div class="render-content">
    <div class="search-page">
      <div>
        <h2 class="title">"${searchInput}" 검색 결과</h2>
      </div>

      <main>
        <ul class="thumbnail-list">
          ${skeletonItems}
        </ul>
      </main>
    </div>
  </div>
  `;
};
class SearchPage {
  constructor() {
    __privateAdd(this, _SearchPage_instances);
    __privateAdd(this, _container7);
    __privateAdd(this, _movieListData2, []);
    __privateAdd(this, _isLoading2, true);
    __privateAdd(this, _query);
    __privateAdd(this, _currentPage2, 1);
    __privateAdd(this, _totalPage, 0);
    __privateAdd(this, _loadMoreData2, async () => {
      __privateSet(this, _currentPage2, __privateGet(this, _currentPage2) + 1);
      const { movieListData } = await extractedeData(SYSTEM_CONSTANTS.MAIN_URL(__privateGet(this, _currentPage2)));
      __privateSet(this, _movieListData2, movieListData);
      this.renderDynamicSection();
    });
    __privateSet(this, _container7, document.createElement("div"));
    __privateGet(this, _container7).classList.add("search-page");
    const params = new URLSearchParams(window.location.search);
    __privateSet(this, _query, params.get("query") ?? "");
    this.init();
  }
  async init() {
    __privateSet(this, _isLoading2, true);
    this.render();
    if (__privateGet(this, _query)) {
      const { movieListData, totalPage } = await extractedeData(
        SYSTEM_CONSTANTS.SEARCH_URL(__privateGet(this, _query), __privateGet(this, _currentPage2))
      );
      __privateSet(this, _movieListData2, movieListData);
      __privateSet(this, _totalPage, totalPage);
    }
    __privateSet(this, _isLoading2, false);
    this.render();
  }
  render() {
    __privateGet(this, _container7).innerHTML = "";
    if (__privateGet(this, _isLoading2)) {
      __privateGet(this, _container7).innerHTML = searchPageLoadingTemplate(__privateGet(this, _query));
      return;
    }
    __privateGet(this, _container7).appendChild(__privateMethod(this, _SearchPage_instances, titleElement_fn2).call(this));
    this.renderDynamicSection();
  }
  renderDynamicSection() {
    const loadMoreButton = document.querySelector(".button--medium");
    if (loadMoreButton) {
      loadMoreButton.remove();
    }
    __privateGet(this, _container7).appendChild(__privateMethod(this, _SearchPage_instances, movieGridElement_fn2).call(this));
    if (__privateGet(this, _currentPage2) !== __privateGet(this, _totalPage)) __privateGet(this, _container7).appendChild(__privateMethod(this, _SearchPage_instances, loadMoreButtonElement_fn2).call(this));
  }
  get element() {
    return __privateGet(this, _container7);
  }
}
_container7 = new WeakMap();
_movieListData2 = new WeakMap();
_isLoading2 = new WeakMap();
_query = new WeakMap();
_currentPage2 = new WeakMap();
_totalPage = new WeakMap();
_SearchPage_instances = new WeakSet();
movieGridElement_fn2 = function() {
  return new MovieGrid({ movieItems: __privateGet(this, _movieListData2) }).element;
};
loadMoreButtonElement_fn2 = function() {
  return new Button({ cssType: "medium", innerText: "더보기", onClick: __privateGet(this, _loadMoreData2) }).element;
};
_loadMoreData2 = new WeakMap();
titleElement_fn2 = function() {
  return new Title({ text: `"${__privateGet(this, _query)}" 검색 결과` }).element;
};
class ErrorPage {
  constructor() {
    __privateAdd(this, _container8);
    __privateSet(this, _container8, document.createElement("div"));
  }
  get element() {
    return __privateGet(this, _container8).appendChild(new ErrorMessage({ errorMessage: ERROR_MESSAGE.FETCH_FAILED }).element);
  }
}
_container8 = new WeakMap();
function routes() {
  return {
    "/": () => new MainPage().element,
    "/search": () => new SearchPage().element,
    "/error": () => new ErrorPage().element
  };
}
async function renderInnerContentsByRoute() {
  const base = "/javascript-movie-review";
  let currentPath = window.location.pathname;
  if (currentPath.startsWith(base)) {
    currentPath = currentPath.replace(base, "") || "/";
  }
  if (currentPath.startsWith("/error")) {
    currentPath = "/error";
  }
  if (currentPath.startsWith("/search")) {
    currentPath = "/search";
  }
  return routes()[currentPath]();
}
async function redirectToPage(url) {
  history.pushState({}, "", url);
  await renderContent();
}
async function renderContent() {
  const layoutContainer = document.querySelector(".content");
  if (layoutContainer) {
    const oldContent = layoutContainer.querySelector(".render-content");
    if (oldContent) {
      oldContent.remove();
    }
    const newContent = await renderInnerContentsByRoute();
    if (newContent) {
      newContent.classList.add("render-content");
      layoutContainer.appendChild(newContent);
    }
  }
}
class SearchBar {
  constructor() {
    __privateAdd(this, _SearchBar_instances);
    __privateAdd(this, _container9);
    __privateAdd(this, _searchValue, "");
    __privateSet(this, _container9, document.createElement("div"));
    __privateGet(this, _container9).classList.add("searchbar");
    this.render();
    __privateMethod(this, _SearchBar_instances, bindEvent_fn).call(this);
  }
  render() {
    __privateGet(this, _container9).innerHTML = `
      <input placeholder="검색어를 입력하세요" class="text-placeholder searchbar__input" />
      <img src="https://h0ngju.github.io/javascript-movie-review/search-icon.png" class="searchbar__icon"/>
  `;
  }
  get element() {
    return __privateGet(this, _container9);
  }
}
_container9 = new WeakMap();
_searchValue = new WeakMap();
_SearchBar_instances = new WeakSet();
bindInputEvent_fn = function() {
  const input = __privateGet(this, _container9).querySelector(".searchbar__input");
  input == null ? void 0 : input.addEventListener("input", (event) => {
    if (event.target instanceof HTMLInputElement) {
      __privateSet(this, _searchValue, event.target.value);
    }
  });
};
bindEnterEvent_fn = function() {
  const input = __privateGet(this, _container9).querySelector(".searchbar__input");
  input == null ? void 0 : input.addEventListener("keydown", (event) => {
    if (event instanceof KeyboardEvent && event.key === "Enter" && event.target instanceof HTMLInputElement) {
      __privateMethod(this, _SearchBar_instances, search_fn).call(this);
    }
  });
};
bindSearchIconEvent_fn = function() {
  const icon = __privateGet(this, _container9).querySelector(".searchbar__icon");
  icon == null ? void 0 : icon.addEventListener("click", () => {
    __privateMethod(this, _SearchBar_instances, search_fn).call(this);
  });
};
search_fn = function() {
  if (__privateGet(this, _searchValue).length === 0) return;
  const params = new URLSearchParams(window.location.search);
  params.set("query", __privateGet(this, _searchValue));
  const searchUrl = `/search?${params.toString()}`;
  window.history.pushState({}, "", searchUrl);
  redirectToPage(searchUrl);
};
bindEvent_fn = function() {
  __privateMethod(this, _SearchBar_instances, bindInputEvent_fn).call(this);
  __privateMethod(this, _SearchBar_instances, bindSearchIconEvent_fn).call(this);
  __privateMethod(this, _SearchBar_instances, bindEnterEvent_fn).call(this);
};
class Header {
  constructor() {
    __privateAdd(this, _Header_instances);
    __privateAdd(this, _container10);
    __privateAdd(this, _searchBar);
    __privateSet(this, _container10, document.createElement("header"));
    __privateGet(this, _container10).className = "header";
    __privateSet(this, _searchBar, new SearchBar());
    this.render();
  }
  get element() {
    return __privateGet(this, _container10);
  }
  render() {
    __privateGet(this, _container10).innerHTML = `
    <h1 class="logo"/>
         <img src="https://h0ngju.github.io/javascript-movie-review/logo.png" alt="MovieList" ></h1>
    `;
    __privateMethod(this, _Header_instances, bindLogoClickEvent_fn).call(this);
    const searchBarWrapper = document.createElement("div");
    searchBarWrapper.className = "header__searchbar";
    searchBarWrapper.appendChild(__privateGet(this, _searchBar).element);
    __privateGet(this, _container10).appendChild(searchBarWrapper);
  }
}
_container10 = new WeakMap();
_searchBar = new WeakMap();
_Header_instances = new WeakSet();
bindLogoClickEvent_fn = function() {
  const logo = __privateGet(this, _container10).querySelector(".logo img");
  if (logo) {
    logo.addEventListener("click", () => {
      redirectToPage("/");
    });
  }
};
class Layout {
  constructor() {
    __privateAdd(this, _container11);
    __privateAdd(this, _header);
    __privateAdd(this, _footer2);
    __privateAdd(this, _contentContainer);
    var _a;
    __privateSet(this, _container11, document.createElement("div"));
    __privateGet(this, _container11).classList.add("layout");
    __privateSet(this, _header, new Header());
    __privateSet(this, _footer2, new Footer());
    __privateSet(this, _contentContainer, document.createElement("div"));
    __privateGet(this, _contentContainer).classList.add("content");
    __privateGet(this, _container11).appendChild(__privateGet(this, _header).element);
    __privateGet(this, _container11).appendChild(__privateGet(this, _contentContainer));
    __privateGet(this, _container11).appendChild(__privateGet(this, _footer2).element);
    (_a = document.querySelector("body")) == null ? void 0 : _a.appendChild(__privateGet(this, _container11));
    this.render();
  }
  get element() {
    return __privateGet(this, _container11);
  }
  async render() {
    await renderContent();
  }
}
_container11 = new WeakMap();
_header = new WeakMap();
_footer2 = new WeakMap();
_contentContainer = new WeakMap();
addEventListener("load", () => {
  new Layout();
});
