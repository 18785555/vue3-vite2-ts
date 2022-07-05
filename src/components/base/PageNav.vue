<script setup lang="ts">
interface Props {
    one: string;
    two: string;
    three?: string;
}
withDefaults(defineProps<Props>(), {});
</script>
<template>
    <nav role="navigation" class="breadcrumb has-bullet-separator" aria-label="breadcrumbs"
        itemtype="https://schema.org/BreadcrumbList">
        <ul>
            <li itemprop="itemListElement" itemtype="https://schema.org/ListItem">
                <a href="/" class="breadcrumb-item" itemprop="item"><span class="icon is-small is-solo"><svg
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true" role="img" class="iconify iconify--feather" width="1em" height="1em"
                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="feather:home">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2">
                                <path d="m3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <path d="M9 22V12h6v10"></path>
                            </g>
                        </svg></span>
                    <meta itemprop="name" content="Vuero" />
                    <meta itemprop="position" content="1" />
                </a>
            </li>
            <li itemprop="itemListElement" itemtype="https://schema.org/ListItem">
                <a href="/components" class="router-link-active breadcrumb-item" itemprop="item">
                    <span itemprop="name">{{one}}</span>
                    <meta itemprop="position" content="2" />
                </a>
            </li>
            <li itemprop="itemListElement" itemtype="https://schema.org/ListItem">
                <a href="/components/flextable" class="breadcrumb-item" itemprop="item">
                    <span itemprop="name">{{two}}</span>
                    <meta itemprop="position" content="3" />
                </a>
            </li>
            <li v-if="three!==undefined" itemprop="itemListElement" itemtype="https://schema.org/ListItem">
                <a href="/components/flextable" class="breadcrumb-item" itemprop="item">
                    <span itemprop="name">{{three}}</span>
                    <meta itemprop="position" content="3" />
                </a>
            </li>
        </ul>
    </nav>
</template>
