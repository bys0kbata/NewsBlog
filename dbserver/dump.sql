--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

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
-- Name: News; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."News" (
    idnews integer NOT NULL,
    namenews character varying NOT NULL,
    textnews character varying NOT NULL,
    datepublish character varying NOT NULL
);


ALTER TABLE public."News" OWNER TO postgres;

--
-- Name: News_idnews_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."News_idnews_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."News_idnews_seq" OWNER TO postgres;

--
-- Name: News_idnews_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."News_idnews_seq" OWNED BY public."News".idnews;


--
-- Name: News idnews; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."News" ALTER COLUMN idnews SET DEFAULT nextval('public."News_idnews_seq"'::regclass);


--
-- Data for Name: News; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."News" VALUES (7, 'PSUTICOOL', 'COOL OSANOV', '1.1.2024');
INSERT INTO public."News" VALUES (8, 'PSUTICOOL', 'COOL OSANOV', '1.1.2024');
INSERT INTO public."News" VALUES (9, 'PSUTICOOL', 'COOL OSANOV', '1.1.2024');
INSERT INTO public."News" VALUES (10, 'PSUTICOOL', 'COOL OSANOV', '1.1.2024');
INSERT INTO public."News" VALUES (11, 'PSUTICOOL', '', 'undefined');
INSERT INTO public."News" VALUES (12, '', 'undefined', 'undefined');
INSERT INTO public."News" VALUES (13, 'undefined', 'undefined', 'undefined');
INSERT INTO public."News" VALUES (14, 'undefined', 'undefined', 'undefined');
INSERT INTO public."News" VALUES (15, 'undefined', 'undefined', 'undefined');
INSERT INTO public."News" VALUES (16, 'null', 'null', 'null');
INSERT INTO public."News" VALUES (17, 'null', 'null', 'null');
INSERT INTO public."News" VALUES (18, '', '', '');
INSERT INTO public."News" VALUES (19, 'NULL', 'NULL', 'NULL');
INSERT INTO public."News" VALUES (20, 'sfd', 'sdf', '33.34.34');


--
-- Name: News_idnews_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."News_idnews_seq"', 20, true);


--
-- Name: News News_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."News"
    ADD CONSTRAINT "News_pkey" PRIMARY KEY (idnews);


--
-- PostgreSQL database dump complete
--

