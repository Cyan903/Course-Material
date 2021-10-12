<template>
    <header>
        <nav>
            <h1><router-link to="/">Coach Finder</router-link></h1>
            <ul>
                <li><router-link to="/coaches">All Coaches</router-link></li>
                <li><router-link to="/requests">Requests</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
@import url("../../../public/css/header.css");
</style>