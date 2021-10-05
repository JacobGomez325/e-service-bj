<template>
  <div class="reveal">
    <div class="flex flex-col relative  reveal-1 justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl" style="min-height:300px">
      <div class="p-5">
        <slot name="title" ></slot>
        <slot name="description"></slot>
      </div>
      <div class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const ratio = .1
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: ratio
    }
    const handleIntersect = function (entries,observer) {
      entries.forEach(entry => {
        if(entry.intersectionRatio > ratio) {
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        }
      })
    }
    const observer = new IntersectionObserver(handleIntersect, options);
    document.querySelectorAll('.reveal').forEach(function (r) {
        observer.observe(r)
    })

  },

}
</script>

<style scoped>

.reveal [class*="reveal-"] {
    opacity: 0;
    transform: translateY(30px);
}
.reveal-visible [class*="reveal-"] {
    opacity: 1;
    transform: translateY(0px);
    transition: 1s cubic-bezier(.5,0,0,1);
}
.reveal-visible .reveal-2 {
    transition-delay: .3s;
}
.reveal-visible .reveal-3 {
    transition-delay: .4s;
}
.reveal-visible .reveal-4 {
    transition-delay: .5s;
}

@media (prefers-reduced-motion) {
    .reveal [class*="reveal-"] {
        opacity: 1;
        transform: translateY(0px);
    }
    [class*="reveal-"] {
        transition-delay: 0ms!important;
        transition-duration: 0ms!important;
    }
    
}
.responsive {
  max-width: 100%;
  height: auto;
}
</style>