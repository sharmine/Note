<template>
  <div class="m-toolbar">
    <img src="../assets/imgs/logo.png" alt="Note" class="u-logo">
    <div class="u-btngroup">
      <a href="javascript:;" class="btn btn-add" @click="addNewNote"></a>
      <router-link class="btn btn-search" to="/search"></router-link>
    </div>
    <div class="u-btngroup">
      <a href="javascript:;" class="btn btn-star" @click="getStarNote" :class="{active: isStar}"></a>
      <a href="javascript:;" class="btn btn-note" @click="showNoteList"></a>
      <a href="javascript:;" class="btn btn-book"></a>
      <a href="javascript:;" class="btn btn-tag" @click="toggleTagList"></a>
    </div>
    <div class="u-avatar">
      <img src="../assets/imgs/avatar.png" alt="Ice" class="pic">
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    isStar: function () {
      return this.$store.state.showStar
    }
  },
  methods: {
    addNewNote: function () {
      this.$store.commit('RENDER_NOTE', {
        id: -1,
        isNew: true
      })
    },
    getStarNote: function () {
      this.$store.commit('GET_STAR')
    },
    toggleTagList: function () {
      this.$store.commit('SHOW_TAG_LIST')
    },
    showNoteList: function () {
      this.$store.commit('SHOW_NOTE_LIST')
    }
  }
}
</script>
<style lang="scss" scoped>
.m-toolbar {
  display: block;
  width: 73px;
  height: 100%;
  background: #f8f8f8;
  border-right: 1px solid #ececec;
  text-align: center;
  font-size: 0;
  .u-logo {
    display: inline-block;
    width: 36px;
    height: 36px;
    padding-top: 10px;
  }
  .u-avatar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 15px 0;
    border-top: 1px solid #e1e1e1;
    .pic {
      display: inline-block;
      width: 36px;
      height: 36px;
      border-radius: 18px;
    }
  }
  .u-btngroup {
    padding: 30px 0 20px;
    .btn {
      display: inline-block;
      width: 42px;
      height: 42px;
      padding: 3px 0;
      background-color: transparent;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      &.btn-add {
        background-image: url(../assets/imgs/add.png)
      }
      &.btn-search {
        background-image: url(../assets/imgs/search.png)
      }
      &.btn-star {
        background-image: url(../assets/imgs/star.png)
      }
      &.btn-note {
        background-image: url(../assets/imgs/note.png)
      }
      &.btn-book {
        background-image: url(../assets/imgs/book.png)
      }
      &.btn-tag {
        background-image: url(../assets/imgs/tag.png)
      }
      &:hover, &.active {
        &.btn-add {
          background-image: url(../assets/imgs/add_active.png)
        }
        &.btn-search {
          background-image: url(../assets/imgs/search_active.png)
        }
        &.btn-star {
          background-image: url(../assets/imgs/star_active.png)
        }
        &.btn-note {
          background-image: url(../assets/imgs/note_active.png)
        }
        &.btn-book {
          background-image: url(../assets/imgs/book_active.png)
        }
        &.btn-tag {
          background-image: url(../assets/imgs/tag_active.png)
        }
      }
    }
  }
}
</style>