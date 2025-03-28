var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _footer, _button, _onClick, _bindEvent, _container, _data, _detailButton, _MainBanner_instances, detailButtonElement_fn, _container2, _data2, _MovieItem_instances, matchImgUrl_fn, _bindEvents, _container3, _errorMessage, _container4, _movieItems, _listElement, _MovieGrid_instances, emptyListElement_fn, movieItemElements_fn, _container5, _text, _container6, _movieListData, _currentPage, _isLoading, _movieGrid, _MainPage_instances, renderGridMovies_fn, titleElement_fn, mainBannerElement_fn, movieGridElement_fn, _loadMoreData, _onScroll, bindInfiniteScrollEvent_fn, _container7, _movieListData2, _newMovies, _isLoading2, _query, _currentPage2, _totalPage, _movieGrid2, _SearchPage_instances, renderGridMovies_fn2, movieGridElement_fn2, _loadMoreData2, titleElement_fn2, _onScroll2, bindInfiniteScrollEvent_fn2, _container8, _STORAGE_KEY, _container9, _starRating, _rate, _movieId, _ModalStar_instances, render_fn, calculateRate_fn, bindClickEvent_fn, updateState_fn, updateRate_fn, updateComent_fn, _container10, _movieData, _isLoading3, _Modal_instances, renderModalContent_fn, appendStars_fn, _bindMovieClickedEvent, _bindCloseButton, _bindESCEvent, _bindClickBarckDrop, fetchMovieDetails_fn, _currentPage3, _modal, _container11, _searchValue, _SearchBar_instances, bindInputEvent_fn, bindFromEvent_fn, search_fn, bindEvent_fn, _container12, _Header_instances, bindLogoClickEvent_fn, _container13, _header, _footer2, _contentContainer;
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
const SYSTEM_CONSTANTS = {
  BASE_API_URL: "https://api.themoviedb.org/3",
  BASE_IMG_URL: "https://image.tmdb.org/t/p/w500",
  SEARCH_URL: (searchValue, page) => `/search/movie?query=${searchValue}&language=ko-KR&include_adult=false&page=${page}`,
  MAIN_URL: (page) => `/movie/popular?language=ko-KR&include_adult=false&page=${page}`,
  DETAIL_URL: (id) => `/movie/${id}?language=ko-KR`
};
const IMAGE_URL = {
  LOGO: `${"/javascript-movie-review/"}logo.png`,
  WOOWA_LOGO: `${"/javascript-movie-review/"}woowacourse_logo.png`
};
class Footer {
  constructor() {
    __privateAdd(this, _footer);
    __privateSet(this, _footer, document.createElement("footer"));
    __privateGet(this, _footer).className = "footer";
    this.render();
  }
  render() {
    __privateGet(this, _footer).innerHTML = `
        <p><img src=${IMAGE_URL.WOOWA_LOGO} width="180" /></p>
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
    __privateAdd(this, _detailButton, null);
    __privateSet(this, _container, document.createElement("div"));
    __privateGet(this, _container).classList.add("main-banner");
    __privateSet(this, _data, data);
    this.render();
    __privateMethod(this, _MainBanner_instances, detailButtonElement_fn).call(this);
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
              <div class="main-banner__button"></div>
        </div>`;
  }
  get element() {
    return __privateGet(this, _container);
  }
}
_container = new WeakMap();
_data = new WeakMap();
_detailButton = new WeakMap();
_MainBanner_instances = new WeakSet();
detailButtonElement_fn = function() {
  __privateSet(this, _detailButton, new Button({
    cssType: "small",
    innerText: "자세히 보기",
    onClick: () => {
      const event = new CustomEvent("movie-clicked", {
        detail: __privateGet(this, _data),
        bubbles: true
      });
      __privateGet(this, _container).dispatchEvent(event);
    }
  }));
  const buttonContainer = __privateGet(this, _container).querySelector(".main-banner__button");
  buttonContainer == null ? void 0 : buttonContainer.appendChild(__privateGet(this, _detailButton).element);
};
class MovieItem {
  constructor({ data }) {
    __privateAdd(this, _MovieItem_instances);
    __privateAdd(this, _container2);
    __privateAdd(this, _data2);
    __privateAdd(this, _bindEvents, () => {
      __privateGet(this, _container2).addEventListener("click", () => {
        const event = new CustomEvent("movie-clicked", {
          detail: __privateGet(this, _data2),
          bubbles: true
        });
        __privateGet(this, _container2).dispatchEvent(event);
      });
    });
    __privateSet(this, _container2, document.createElement("li"));
    __privateSet(this, _data2, data);
    this.render();
    __privateGet(this, _bindEvents).call(this);
  }
  render() {
    __privateGet(this, _container2).innerHTML = `
      <div class="item">
        <img class="thumbnail" src=${__privateMethod(this, _MovieItem_instances, matchImgUrl_fn).call(this)} alt=${__privateGet(this, _data2).title}/>
        <div class="item-desc">
          <p class="rate">
            <img src="https://h0ngju.github.io/javascript-movie-review/star_empty.png" class="star" />
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
_bindEvents = new WeakMap();
const ERROR_MESSAGE = {
  NO_RESULT: "저런! 검색 결과가 없네요 😅",
  FETCH_FAILED: "서버에서 데이터를 불러 오는데 실패했어요 😭"
};
const STATUS_CODE_MESSAGE = {
  400: "잘못된 요청입니다.",
  401: "인증되지 않은 요청입니다.",
  403: "접근 권한이 없습니다.",
  404: "찾을 수 없는 페이지입니다.",
  429: "요청이 너무 많습니다.",
  500: "서버 에러가 발생했습니다."
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
  ` + (__privateGet(this, _errorMessage) === ERROR_MESSAGE.NO_RESULT ? `
        <p class="text-body check-text">✅ 단어의 철자가 정확한지 확인해 보세요.</p>
        <p class="text-body check-text">✅ 검색어의 단어 수를 줄이거나, 보다 일반적인 검색어로 다시 검색해 보세요.</p>
        <p class="text-body check-text">✅ 두 단어 이상의 검색어인 경우, 띄어쓰기를 확인해 보세요.</p>` : "");
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
    __privateAdd(this, _listElement);
    __privateSet(this, _container4, document.createElement("main"));
    __privateSet(this, _listElement, document.createElement("ul"));
    __privateGet(this, _listElement).classList.add("thumbnail-list");
    __privateGet(this, _container4).appendChild(__privateGet(this, _listElement));
    __privateSet(this, _movieItems, movieItems);
    this.render(__privateGet(this, _movieItems));
  }
  render(items) {
    if (items.length === 0) {
      __privateGet(this, _container4).innerHTML = __privateMethod(this, _MovieGrid_instances, emptyListElement_fn).call(this);
      return;
    }
    const itemsHTML = __privateMethod(this, _MovieGrid_instances, movieItemElements_fn).call(this, items);
    itemsHTML.forEach((el) => __privateGet(this, _listElement).appendChild(el));
  }
  appendMovies(newItems) {
    const elements = __privateMethod(this, _MovieGrid_instances, movieItemElements_fn).call(this, newItems);
    __privateSet(this, _movieItems, [...__privateGet(this, _movieItems), ...newItems]);
    return elements;
  }
  get element() {
    return __privateGet(this, _container4);
  }
}
_container4 = new WeakMap();
_movieItems = new WeakMap();
_listElement = new WeakMap();
_MovieGrid_instances = new WeakSet();
emptyListElement_fn = function() {
  return new ErrorMessage({ errorMessage: ERROR_MESSAGE.NO_RESULT }).element.outerHTML;
};
movieItemElements_fn = function(items) {
  return items.map((movieItem) => new MovieItem({ data: movieItem }).element);
};
class Title {
  constructor({ text }) {
    __privateAdd(this, _container5);
    __privateAdd(this, _text);
    __privateSet(this, _container5, document.createElement("h2"));
    __privateGet(this, _container5).classList.add("title");
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
class APIClient {
  static async get(url) {
    try {
      const response = await fetch(SYSTEM_CONSTANTS.BASE_API_URL + url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDFlZjU1NDhlYjJhMzcxNGVlZGU4ZDlhOTc5OTM4YiIsIm5iZiI6MTc0MjI3ODcxOC43OTIsInN1YiI6IjY3ZDkxMDNlYzUzMzllYWJjNjM2NTUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MWyqHYcKklHJtdt77FdqeixOePsLny3siiYW-VRDsIk"}`
        }
      });
      const data = await response.json();
      if (!response.ok) {
        const message = STATUS_CODE_MESSAGE[response.status] || `${response.status} 에러가 발생했습니다.`;
        throw new Error(message);
      }
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
async function extractedData(url) {
  try {
    const movieList = await APIClient.get(url);
    const movieListData = movieList.results.map((movieItem) => ({
      id: movieItem.id,
      title: movieItem.title,
      imgUrl: `${SYSTEM_CONSTANTS.BASE_IMG_URL}${movieItem.poster_path}`,
      score: Number(movieItem.vote_average.toFixed(1)),
      overview: movieItem.overview
    }));
    return { movieListData, totalPage: movieList.total_pages };
  } catch (error) {
    redirectToPage("/error");
    throw error;
  }
}
async function extractedMovieDetails(id) {
  try {
    const details = await APIClient.get(SYSTEM_CONSTANTS.DETAIL_URL(id));
    return {
      id: details.id,
      title: details.title,
      imgUrl: `${SYSTEM_CONSTANTS.BASE_IMG_URL}${details.poster_path}`,
      score: Number(details.vote_average.toFixed(1)),
      overview: details.overview,
      genres: details.genres.map((genre) => genre.name).join(", "),
      release_date: details.release_date.split("-")[0]
    };
  } catch (error) {
    redirectToPage("/error");
    throw error;
  }
}
const $ = ({ root = document, selector }) => {
  return root.querySelector(selector);
};
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
    __privateAdd(this, _movieGrid, null);
    __privateAdd(this, _loadMoreData, async () => {
      __privateSet(this, _currentPage, __privateGet(this, _currentPage) + 1);
      const { movieListData } = await extractedData(SYSTEM_CONSTANTS.MAIN_URL(__privateGet(this, _currentPage)));
      __privateSet(this, _movieListData, [...__privateGet(this, _movieListData), ...movieListData]);
      this.renderDynamicSection();
    });
    __privateAdd(this, _onScroll, () => {
      if (__privateGet(this, _isLoading)) return;
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        __privateGet(this, _loadMoreData).call(this);
      }
    });
    __privateSet(this, _container6, document.createElement("div"));
    __privateGet(this, _container6).classList.add("main-page");
    this.init();
  }
  async init() {
    __privateSet(this, _isLoading, true);
    this.render();
    const { movieListData } = await extractedData(SYSTEM_CONSTANTS.MAIN_URL(__privateGet(this, _currentPage)));
    __privateSet(this, _movieListData, movieListData);
    __privateSet(this, _isLoading, false);
    this.render();
    __privateMethod(this, _MainPage_instances, bindInfiniteScrollEvent_fn).call(this);
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
    const $loadMoreButton = $({ selector: ".button--medium" });
    if ($loadMoreButton) $loadMoreButton.remove();
    __privateMethod(this, _MainPage_instances, renderGridMovies_fn).call(this);
  }
  get element() {
    return __privateGet(this, _container6);
  }
  destroy() {
    window.removeEventListener("scroll", __privateGet(this, _onScroll));
  }
}
_container6 = new WeakMap();
_movieListData = new WeakMap();
_currentPage = new WeakMap();
_isLoading = new WeakMap();
_movieGrid = new WeakMap();
_MainPage_instances = new WeakSet();
renderGridMovies_fn = function() {
  if (!__privateGet(this, _movieGrid)) {
    __privateGet(this, _container6).appendChild(__privateMethod(this, _MainPage_instances, movieGridElement_fn).call(this));
    return;
  }
  const newItems = __privateGet(this, _movieListData).slice(-20);
  const movieElements = __privateGet(this, _movieGrid).appendMovies(newItems);
  const list = $({ selector: ".thumbnail-list" });
  if (!list) throw new Error("thumbnail-list가 존재하지 않습니다.");
  movieElements.forEach((el) => list.appendChild(el));
};
titleElement_fn = function() {
  return new Title({ text: "지금 인기 있는 영화" }).element;
};
mainBannerElement_fn = function() {
  return new MainBanner({ data: __privateGet(this, _movieListData)[0] }).element;
};
movieGridElement_fn = function() {
  __privateSet(this, _movieGrid, new MovieGrid({ movieItems: __privateGet(this, _movieListData) }));
  return __privateGet(this, _movieGrid).element;
};
_loadMoreData = new WeakMap();
_onScroll = new WeakMap();
bindInfiniteScrollEvent_fn = function() {
  window.addEventListener("scroll", __privateGet(this, _onScroll));
};
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
    __privateAdd(this, _newMovies, []);
    __privateAdd(this, _isLoading2, true);
    __privateAdd(this, _query);
    __privateAdd(this, _currentPage2, 1);
    __privateAdd(this, _totalPage, 0);
    __privateAdd(this, _movieGrid2, null);
    __privateAdd(this, _loadMoreData2, async () => {
      __privateSet(this, _currentPage2, __privateGet(this, _currentPage2) + 1);
      const { movieListData } = await extractedData(SYSTEM_CONSTANTS.SEARCH_URL(__privateGet(this, _query), __privateGet(this, _currentPage2)));
      __privateSet(this, _newMovies, movieListData);
      __privateSet(this, _movieListData2, [...__privateGet(this, _movieListData2), ...movieListData]);
      this.renderDynamicSection();
    });
    __privateAdd(this, _onScroll2, () => {
      if (__privateGet(this, _isLoading2) || __privateGet(this, _currentPage2) === __privateGet(this, _totalPage)) {
        return;
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        __privateGet(this, _loadMoreData2).call(this);
      }
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
      const { movieListData, totalPage } = await extractedData(
        SYSTEM_CONSTANTS.SEARCH_URL(__privateGet(this, _query), __privateGet(this, _currentPage2))
      );
      __privateSet(this, _movieListData2, movieListData);
      __privateSet(this, _newMovies, movieListData);
      __privateSet(this, _totalPage, totalPage);
    }
    __privateSet(this, _isLoading2, false);
    this.render();
    __privateMethod(this, _SearchPage_instances, bindInfiniteScrollEvent_fn2).call(this);
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
    const $loadMoreButton = $({ selector: ".button--medium" });
    if ($loadMoreButton) $loadMoreButton.remove();
    __privateMethod(this, _SearchPage_instances, renderGridMovies_fn2).call(this);
  }
  get element() {
    return __privateGet(this, _container7);
  }
  destroy() {
    window.removeEventListener("scroll", __privateGet(this, _onScroll2));
  }
}
_container7 = new WeakMap();
_movieListData2 = new WeakMap();
_newMovies = new WeakMap();
_isLoading2 = new WeakMap();
_query = new WeakMap();
_currentPage2 = new WeakMap();
_totalPage = new WeakMap();
_movieGrid2 = new WeakMap();
_SearchPage_instances = new WeakSet();
renderGridMovies_fn2 = function() {
  if (!__privateGet(this, _movieGrid2)) {
    __privateGet(this, _container7).appendChild(__privateMethod(this, _SearchPage_instances, movieGridElement_fn2).call(this));
    return;
  }
  const movieElements = __privateGet(this, _movieGrid2).appendMovies(__privateGet(this, _newMovies));
  const list = $({ selector: ".thumbnail-list" });
  if (!list) throw new Error("thumbnail-list가 존재하지 않습니다.");
  movieElements.forEach((el) => list.appendChild(el));
};
movieGridElement_fn2 = function() {
  __privateSet(this, _movieGrid2, new MovieGrid({ movieItems: __privateGet(this, _movieListData2) }));
  return __privateGet(this, _movieGrid2).element;
};
_loadMoreData2 = new WeakMap();
titleElement_fn2 = function() {
  return new Title({ text: `"${__privateGet(this, _query)}" 검색 결과` }).element;
};
_onScroll2 = new WeakMap();
bindInfiniteScrollEvent_fn2 = function() {
  window.addEventListener("scroll", __privateGet(this, _onScroll2));
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
class LocalStorage {
  static getMovies() {
    const storedData = localStorage.getItem(__privateGet(this, _STORAGE_KEY));
    try {
      if (!storedData) return [];
      const parsedData = JSON.parse(storedData);
      return parsedData;
    } catch (error) {
      throw new Error("로컬 스토리지에서 데이터를 불러 올 수 없습니다.");
    }
  }
  static saveMovie(movie) {
    const existingList = this.getMovies();
    const filteredList = existingList.filter((m) => m.id !== movie.id);
    const updatedList = [...filteredList, movie];
    localStorage.setItem(__privateGet(this, _STORAGE_KEY), JSON.stringify(updatedList));
  }
  static updateMovieStarById(id, stars) {
    const movies = this.getMovies();
    const updatedMovies = movies.map((movie) => movie.id === id ? { ...movie, userRating: stars } : movie);
    localStorage.setItem(__privateGet(this, _STORAGE_KEY), JSON.stringify(updatedMovies));
  }
  static getMovieStarById(id) {
    var _a;
    return ((_a = this.getMovies().find((m) => m.id === id)) == null ? void 0 : _a.userRating) || ["empty", "empty", "empty", "empty", "empty"];
  }
}
_STORAGE_KEY = new WeakMap();
__privateAdd(LocalStorage, _STORAGE_KEY, "movies");
const modalLoadingTemplate = `
<div class="loading-spinner"></div>`;
class ModalStar {
  constructor(movieId, userRating = ["empty", "empty", "empty", "empty", "empty"]) {
    __privateAdd(this, _ModalStar_instances);
    __privateAdd(this, _container9);
    __privateAdd(this, _starRating);
    __privateAdd(this, _rate);
    __privateAdd(this, _movieId);
    __privateSet(this, _starRating, userRating);
    __privateSet(this, _movieId, movieId);
    __privateSet(this, _rate, __privateMethod(this, _ModalStar_instances, updateRate_fn).call(this));
    __privateSet(this, _container9, document.createElement("div"));
    __privateGet(this, _container9).classList.add("modal-star-container");
    __privateMethod(this, _ModalStar_instances, render_fn).call(this);
    __privateMethod(this, _ModalStar_instances, bindClickEvent_fn).call(this);
  }
  get element() {
    return __privateGet(this, _container9);
  }
}
_container9 = new WeakMap();
_starRating = new WeakMap();
_rate = new WeakMap();
_movieId = new WeakMap();
_ModalStar_instances = new WeakSet();
render_fn = function() {
  __privateGet(this, _container9).innerHTML = `
      <div class="text-body">내 별점</div>
      ${__privateGet(this, _starRating).map(
    (starRating, index) => `
          <img 
            src="https://h0ngju.github.io/javascript-movie-review/star_${starRating}.png"
            class="modal-star"
            data-index="${index}"
          />`
  ).join("")}
      <div class="text-body review">${__privateMethod(this, _ModalStar_instances, updateComent_fn).call(this)}</div>
      <div class="text-body">(${__privateGet(this, _rate)}/10)</div>
    `;
};
calculateRate_fn = function() {
  return __privateGet(this, _starRating).filter((star) => star === "filled").length * 2;
};
bindClickEvent_fn = function() {
  __privateGet(this, _container9).addEventListener("click", (e) => {
    const target = e.target;
    if (!target.classList.contains("modal-star")) throw new Error("별점을 찾을 수 없습니다.");
    const index = Number(target.dataset.index);
    __privateSet(this, _rate, (index + 1) * 2);
    __privateMethod(this, _ModalStar_instances, updateState_fn).call(this, index + 1);
    LocalStorage.updateMovieStarById(__privateGet(this, _movieId), __privateGet(this, _starRating));
    __privateMethod(this, _ModalStar_instances, render_fn).call(this);
  });
};
updateState_fn = function(filledCount) {
  __privateSet(this, _starRating, __privateGet(this, _starRating).map((_, i) => i < filledCount ? "filled" : "empty"));
};
updateRate_fn = function() {
  return __privateSet(this, _rate, __privateMethod(this, _ModalStar_instances, calculateRate_fn).call(this));
};
updateComent_fn = function() {
  if (__privateGet(this, _rate) === 0) return "영화 어떻게 보셨나요?";
  if (__privateGet(this, _rate) === 2) return "최악이에요";
  if (__privateGet(this, _rate) === 4) return "별로에요";
  if (__privateGet(this, _rate) === 6) return "보통이에요";
  if (__privateGet(this, _rate) === 8) return "재미있어요";
  if (__privateGet(this, _rate) === 10) return "명작이에요";
  return "";
};
class Modal {
  constructor() {
    __privateAdd(this, _Modal_instances);
    __privateAdd(this, _container10);
    __privateAdd(this, _movieData);
    __privateAdd(this, _isLoading3, true);
    __privateAdd(this, _bindMovieClickedEvent, () => {
      document.addEventListener("movie-clicked", (e) => {
        const customEvent = e;
        this.openModal(customEvent.detail);
      });
    });
    __privateAdd(this, _bindCloseButton, () => {
      const $close = $({ selector: ".close-modal" });
      if (!$close) throw Error("닫기 버튼이 존재하지 않습니다.");
      $close.addEventListener("click", () => this.closeModal());
    });
    __privateAdd(this, _bindESCEvent, () => {
      document.addEventListener("keyup", (event) => {
        if (event.key === "Escape") {
          this.closeModal();
        }
      });
    });
    __privateAdd(this, _bindClickBarckDrop, () => {
      const $modalBackGround = $({ selector: ".modal-background" });
      if (!$modalBackGround) throw new Error("모달 백그라운드가 존재하지 않습니다.");
      $modalBackGround.addEventListener("click", (event) => {
        if (event.target === event.currentTarget) {
          this.closeModal();
        }
      });
    });
    __privateSet(this, _container10, document.createElement("div"));
    __privateGet(this, _container10).classList.add("modal-background");
    __privateGet(this, _container10).id = "modalBackground";
    __privateGet(this, _bindMovieClickedEvent).call(this);
    __privateGet(this, _bindESCEvent).call(this);
  }
  async openModal(movieData) {
    __privateSet(this, _isLoading3, true);
    __privateMethod(this, _Modal_instances, renderModalContent_fn).call(this);
    __privateGet(this, _container10).classList.add("active");
    document.body.style.overflow = "hidden";
    const movieDetails = await __privateMethod(this, _Modal_instances, fetchMovieDetails_fn).call(this, movieData);
    __privateSet(this, _isLoading3, false);
    __privateMethod(this, _Modal_instances, renderModalContent_fn).call(this, movieDetails);
    __privateGet(this, _bindCloseButton).call(this);
    __privateGet(this, _bindClickBarckDrop).call(this);
  }
  closeModal() {
    const modalBackground = $({ selector: "#modalBackground" });
    if (!modalBackground) throw Error("모달이 존재하지 않습니다.");
    modalBackground.classList.remove("active");
    document.body.style.overflow = "";
  }
  get element() {
    return __privateGet(this, _container10);
  }
}
_container10 = new WeakMap();
_movieData = new WeakMap();
_isLoading3 = new WeakMap();
_Modal_instances = new WeakSet();
renderModalContent_fn = function(movieDetails) {
  if (__privateGet(this, _isLoading3)) {
    __privateGet(this, _container10).innerHTML = modalLoadingTemplate;
    return;
  }
  __privateGet(this, _container10).innerHTML = `
      <div class="modal">
        <button class="close-modal" id="closeModal">
          <img src="https://h0ngju.github.io/javascript-movie-review/close_button.png" />
        </button>
        <div class="modal-container">
          <div class="modal-image">
            <img src="${movieDetails.imgUrl}" />
          </div>
          <div class="modal-description">
            <h2>${movieDetails.title}</h2>
            <p class="category">${movieDetails.release_date} ${movieDetails.genres}</p>
            <p class="rate"><img src="https://h0ngju.github.io/javascript-movie-review/star_filled.png" class="modal-rate-star" /><span>${movieDetails.score}</span></p>
            <hr />
            <section></section>
            <hr/>
            <p class="detail">${movieDetails.overview}</p>
          </div>
        </div>
      </div>
    `;
  __privateMethod(this, _Modal_instances, appendStars_fn).call(this);
};
appendStars_fn = function() {
  const starSection = $({ root: __privateGet(this, _container10), selector: "section" });
  const savedStars = LocalStorage.getMovieStarById(__privateGet(this, _movieData).id);
  const modalStar = new ModalStar(__privateGet(this, _movieData).id, savedStars);
  starSection == null ? void 0 : starSection.appendChild(modalStar.element);
};
_bindMovieClickedEvent = new WeakMap();
_bindCloseButton = new WeakMap();
_bindESCEvent = new WeakMap();
_bindClickBarckDrop = new WeakMap();
fetchMovieDetails_fn = async function(movieData) {
  __privateSet(this, _movieData, movieData);
  const movieDetails = await extractedMovieDetails(movieData.id);
  const stored = {
    ...movieDetails,
    userRating: LocalStorage.getMovieStarById(movieData.id)
  };
  LocalStorage.saveMovie(stored);
  return movieDetails;
};
class PageRenderer {
  constructor() {
    __privateAdd(this, _currentPage3, null);
    __privateAdd(this, _modal, new Modal());
  }
  render({ $container, Page }) {
    var _a;
    if ((_a = __privateGet(this, _currentPage3)) == null ? void 0 : _a.destroy) {
      __privateGet(this, _currentPage3).destroy();
    }
    $container.innerHTML = "";
    Page.element.classList.add("render-content");
    $container.appendChild(Page.element);
    $container.appendChild(__privateGet(this, _modal).element);
    __privateSet(this, _currentPage3, Page);
  }
}
_currentPage3 = new WeakMap();
_modal = new WeakMap();
const renderer = new PageRenderer();
const routes = {
  "/": () => new MainPage(),
  "/search": () => new SearchPage(),
  "/error": () => new ErrorPage()
};
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
  return routes[currentPath]();
}
async function redirectToPage(url) {
  history.pushState({}, "", url);
  await renderContent();
}
function initRouter() {
  window.addEventListener("popstate", () => {
    renderContent();
  });
}
async function renderContent() {
  const $layoutContainer = $({ selector: ".content" });
  if (!$layoutContainer) throw new Error("content가 존재하지 않습니다.");
  const newPage = await renderInnerContentsByRoute();
  if (!newPage) throw new Error("Page가 존재하지 않습니다.");
  renderer.render({ $container: $layoutContainer, Page: newPage });
}
class SearchBar {
  constructor() {
    __privateAdd(this, _SearchBar_instances);
    __privateAdd(this, _container11);
    __privateAdd(this, _searchValue, "");
    __privateSet(this, _container11, document.createElement("div"));
    __privateGet(this, _container11).classList.add("searchbar");
    this.render();
    __privateMethod(this, _SearchBar_instances, bindEvent_fn).call(this);
  }
  render() {
    __privateGet(this, _container11).innerHTML = `
    <form class="searchbar__form">
      <input placeholder="검색어를 입력하세요" class="text-placeholder searchbar__input" />
      <button type="submit" class="searchbar__button">
        <img src="https://h0ngju.github.io/javascript-movie-review/search-icon.png" class="searchbar__icon" alt="검색" />
      </button>
    </form>
  `;
  }
  get element() {
    return __privateGet(this, _container11);
  }
}
_container11 = new WeakMap();
_searchValue = new WeakMap();
_SearchBar_instances = new WeakSet();
bindInputEvent_fn = function() {
  const $input = $({ root: __privateGet(this, _container11), selector: ".searchbar__input" });
  if (!$input) throw new Error("검색창의 input 요소가 존재하지 않습니다.");
  $input.addEventListener("input", (event) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    __privateSet(this, _searchValue, event.target.value);
  });
};
bindFromEvent_fn = function() {
  const $form = $({ root: __privateGet(this, _container11), selector: ".searchbar__form" });
  if (!$form) throw new Error("검색창의 form 요소가 존재하지 않습니다.");
  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    __privateMethod(this, _SearchBar_instances, search_fn).call(this);
  });
};
search_fn = function() {
  if (__privateGet(this, _searchValue).length === 0) return;
  const params = new URLSearchParams(window.location.search);
  params.set("query", __privateGet(this, _searchValue));
  const searchUrl = `/search?${params.toString()}`;
  redirectToPage(searchUrl);
};
bindEvent_fn = function() {
  __privateMethod(this, _SearchBar_instances, bindInputEvent_fn).call(this);
  __privateMethod(this, _SearchBar_instances, bindFromEvent_fn).call(this);
};
class Header {
  constructor() {
    __privateAdd(this, _Header_instances);
    __privateAdd(this, _container12);
    __privateSet(this, _container12, document.createElement("header"));
    __privateGet(this, _container12).className = "header";
    this.render();
  }
  get element() {
    return __privateGet(this, _container12);
  }
  render() {
    __privateGet(this, _container12).innerHTML = `
    <h1 class="logo">
      <img src=${IMAGE_URL.LOGO} alt="MovieList" >
    </h1>
    `;
    __privateMethod(this, _Header_instances, bindLogoClickEvent_fn).call(this);
    const searchBarWrapper = document.createElement("div");
    searchBarWrapper.className = "header__searchbar";
    searchBarWrapper.appendChild(new SearchBar().element);
    __privateGet(this, _container12).appendChild(searchBarWrapper);
  }
}
_container12 = new WeakMap();
_Header_instances = new WeakSet();
bindLogoClickEvent_fn = function() {
  const $logo = $({ root: __privateGet(this, _container12), selector: ".logo" });
  if (!$logo) throw new Error("로고가 존재하지 않습니다.");
  $logo.addEventListener("click", () => {
    redirectToPage("/");
  });
};
class Layout {
  constructor() {
    __privateAdd(this, _container13);
    __privateAdd(this, _header);
    __privateAdd(this, _footer2);
    __privateAdd(this, _contentContainer);
    __privateSet(this, _container13, document.createElement("div"));
    __privateGet(this, _container13).classList.add("layout");
    __privateSet(this, _header, new Header());
    __privateSet(this, _footer2, new Footer());
    __privateSet(this, _contentContainer, document.createElement("div"));
    __privateGet(this, _contentContainer).classList.add("content");
    __privateGet(this, _container13).appendChild(__privateGet(this, _header).element);
    __privateGet(this, _container13).appendChild(__privateGet(this, _contentContainer));
    __privateGet(this, _container13).appendChild(__privateGet(this, _footer2).element);
    $({ selector: "body" }).appendChild(__privateGet(this, _container13));
    this.render();
  }
  get element() {
    return __privateGet(this, _container13);
  }
  async render() {
    await renderContent();
  }
}
_container13 = new WeakMap();
_header = new WeakMap();
_footer2 = new WeakMap();
_contentContainer = new WeakMap();
window.addEventListener("load", () => {
  initRouter();
  new Layout();
});
