import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import MainLayout from '@/layouts/MainLayout'
import PageLoader from '@/components/PageLoader'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const Services = lazy(() => import('@/pages/Services'))
const Products = lazy(() => import('@/pages/Products'))
const Brands = lazy(() => import('@/pages/Brands'))
const Contact = lazy(() => import('@/pages/Contact'))

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Suspense fallback={<PageLoader />}><Home /></Suspense> },
            { path: 'about', element: <Suspense fallback={<PageLoader />}><About /></Suspense> },
            { path: 'services', element: <Suspense fallback={<PageLoader />}><Services /></Suspense> },
            { path: 'products', element: <Suspense fallback={<PageLoader />}><Products /></Suspense> },
            { path: 'brands', element: <Suspense fallback={<PageLoader />}><Brands /></Suspense> },
            { path: 'contact', element: <Suspense fallback={<PageLoader />}><Contact /></Suspense> },
        ],
    },
])
