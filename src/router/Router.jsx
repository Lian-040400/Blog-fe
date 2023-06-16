import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from '@pages/Home'
import { Post } from "@pages/Post";
import { CreatePost } from "@pages/CreatePost";
import { PageLayout } from "@components/layouts/PageLayout";

export const Router = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/post/create' element={<CreatePost />} />
      </Routes>
    </PageLayout>
  );
};
