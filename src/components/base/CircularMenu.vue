<template>
<div id="circular-menu" class="circular-menu ">
      <a class="floating-btn" onclick="document.getElementById('circular-menu').classList.toggle('active');">
        <i aria-hidden="true" class="fas fa-bars"></i>
        <i aria-hidden="true" class="fas fa-times"></i>
      </a>

      <div class="items-wrapper">
        <div class="menu-item is-flex">
          <label class="dark-mode">
            <input type="checkbox" />
            <span></span>
          </label>
        </div>
        <a class="menu-item is-flex right-panel-trigger" data-panel="languages-panel">
          <img src="" alt="">
        </a>
        <a href="/admin-profile-notifications.html" class="menu-item is-flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-bell">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </a>
        <a class="menu-item is-flex right-panel-trigger" data-panel="activity-panel">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-grid">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        </a>
      </div>

    </div>
</template>