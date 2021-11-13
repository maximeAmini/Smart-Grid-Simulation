<template>
    <div class="loader-container">
        <div class="loader"></div>
    </div>
</template>

<style scoped>
    .loader-container{
        display: flex;
        justify-content: center;
        margin-top:10%;
    }
    .loader{
        border: 6px solid #dee2e6;
        width: 40px;
        height: 40px;
        border-top-color: #1abc9c;
        border-radius: 50%;
        animation: chargeur 3s linear infinite;
    }

    @keyframes chargeur {
        0%{
        transform: rotate(0deg) scale(1);
        border-top-color: #7ee8fa;
        }
        50% {
            transform: rotate(360deg) scale(1.15);
        border-top-color: #7ee8fa;
        }
        100%{
        transform: rotate(720deg) scale(1);
        border-top-color: #7ee8fa;
        }
    
    }
</style>