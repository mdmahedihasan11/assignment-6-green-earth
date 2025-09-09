var API_BASE = "https://openapi.programming-hero.com/api";

// DOM Elements
var categoryList = document.getElementById("category-list");
var productList = document.getElementById("product-list");
var cartItemsContainer = document.getElementById("cart-items");
var cartTotal = document.getElementById("cart-total");
var modal = document.getElementById("tree-modal");
var closeModalBtn = document.getElementById("close-modal");
var bottomCloseBtn = document.getElementById("bottom-close");

// Modal fields
var modalImage = document.getElementById("modal-image");
var modalName = document.getElementById("modal-name");
var modalDescription = document.getElementById("modal-description");
var modalCategory = document.getElementById("modal-category");
var modalPrice = document.getElementById("modal-price");
var modalAddBtn = document.getElementById("modal-add-to-cart");

// Cart
var cart = [];
var total = 0;
var currentPlant = null;
