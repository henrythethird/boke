<template>
    <div id="app">
        <Header />
        <section class="page">
            <router-view />
        </section>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    name: 'app',
    components: { Header, Footer }
}
</script>

<style lang="scss">
    .page {
        max-width: 600px;
        margin: auto;
        padding: 15px;
    }

    * {
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        box-sizing: border-box;
        padding: 0;
        margin: 0;
        color: inherit;
        border: none;
        background: transparent;
        text-align: left;
        outline: none;
        text-decoration: none;
        font-size: inherit;
    }

    sup, sub {
        font-size: 75%;
    }

    a {
        transition: color 100ms ease-in-out;
        cursor: pointer;
    }

    ul, ol {
        padding-left: 20px;
    }

    ul ul, ol ol {
        padding-left: 18px;
        margin-bottom: 0;
    }

    p, blockquote, li {
        line-height: 1.7;
        font-size: 18px;
        color: #4D4D4D;
    }

    blockquote {
        position: relative;
        font-style: italic;
        padding: 0 25px;

        &::before {
            content: "";
            position: absolute;
            left: 0;
            width: 8px;
            top: 0;
            bottom: 0;
            background-color: #008AFF;
        }
    }

    hr.all {
        margin: 2em 0;
        background-color: transparent;

        &::before {
            content: '';
            background-color: #f0f0f0;
            position: absolute;
            left: 0;
            right: 0;
            width: auto;
            height: 1px;
        }
    }

    h1, h2, h3, h4, h5, h6, p, blockquote, hr, pre, ul, ol {
        margin-bottom: 1em;
    }

    h1 {
        font-size: 60px;
    }

    h2 {
        font-size: 48px;
    }

    h3 {
        font-size: 30px;
    }
</style>
