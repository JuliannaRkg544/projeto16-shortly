--
-- PostgreSQL database dump
--

-- Dumped from database version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.sessions OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sessions_id_seq OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    visits integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.urls OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sessions (id, "userId", token, "createdAt") FROM stdin;
1	7	69c21ba8-a094-4629-8b2a-cd7b0eca1f89	2022-08-04 13:54:11.116204
2	7	169bb08a-8add-4a27-9147-7ab58c24102c	2022-08-05 11:19:31.21913
3	8	8aaa844d-c106-49ec-b051-5f53be95e293	2022-08-06 12:35:59.568525
4	8	707daf44-19fa-43e7-8ecd-5f34fe6ebf5d	2022-08-06 12:37:49.456347
5	8	03f04157-db6e-4e08-802f-b2d331211d55	2022-08-06 12:38:39.012494
6	9	0b0fd9e2-598d-47bf-9366-fda6bf153851	2022-08-07 16:44:33.584008
7	9	209936aa-a6a1-4a35-a10e-f2073c3f0a7f	2022-08-07 16:46:26.624486
\.


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.urls (id, "userId", url, "shortUrl", visits, "createdAt") FROM stdin;
1	7	https://www.domestika.org/pt/projects/721921-foto-de-perfil-animada	XROD9csNZj150mDN6htAh	3	2022-08-06 12:28:41.498007
4	8	https://pt.wikipedia.org/wiki/Xerife_Woody	V991Ltyo_EO-wlxsIGfcV	0	2022-08-06 15:14:04.151383
5	9	https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218452.jpg?w=2000	tZECvqyj_yqaUizxxjzW6	0	2022-08-07 16:51:23.097864
3	8	https://conteudo.imguol.com.br/c/tab/be/2020/01/17/foto-whatsapp-sumida-1579293251261_v2_1x1.jpg	ZMOLQIDpciaX0UUR_P6b3	5	2022-08-06 12:40:26.878513
8	9	https://st2.depositphotos.com/1177973/6083/i/600/depositphotos_60836977-stock-photo-funny-dogs-isolated-on-white.jpg	oXpg-s8_FWgPMo1uEghNG	2	2022-08-07 16:55:13.085082
9	9	data:image/jpeg;base64,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	a7zQpv9O_wEgRzfpQNNFY	4	2022-08-07 16:55:47.659481
6	9	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWgmcxUvrOY6XXEc1EsXJ4iL75bFfBMkD482Q1zJYEAA&s	9VBf2t9rPEYYHtVeAnYu4	11	2022-08-07 16:51:45.059295
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
2	juliana	juju@gmail.com	juju	2022-08-04 11:34:55.176475
3	João	joao@driven.com.br	driven	2022-08-04 12:06:03.685558
5	jujuba	jujuba@gmail.com.br	jujuba	2022-08-04 13:07:48.988564
6	lari	lari@gmail.com.br	lari	2022-08-04 13:08:47.033617
7	carol	carol@gmail.com.br	$2b$10$3ZNOKKIXSgiCIi8p.bDK1OTyFGevM3qHtgvKIsFiG3Mam2RyXJ8WK	2022-08-04 13:47:36.015379
8	woody	woody@driven.com.br	$2b$10$p5g8Ly6gRk6GmystaSTkEuO4ftdpvdU97eWnRw4TpHqZwykHhoS/.	2022-08-06 12:35:09.544223
9	snoopy	snoopy@gmail.com	$2b$10$2MqEwxueTnZXxWpg3D0BjOxxPFyBF1kA9OANKzf.h5buG1cBk06.2	2022-08-07 16:27:22.260435
\.


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sessions_id_seq', 7, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.urls_id_seq', 9, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 9, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

