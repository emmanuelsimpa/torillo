import { fetchFakeData } from "@/apis/home";
import { useState, useEffect } from "react";
import { User } from "../types/user";

export const useOverview = () => {
  const [data, setData] = useState<Array<User>>();
  const [isLoading, setIsLoading] = useState(false);
  const [celebrationAccordion, setCelebrationAccordion] = useState(false);
  const [search, setSearch] = useState("");

  const handleData = () => {
    setIsLoading(true);
    fetchFakeData().then((data) => {
      setData(data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    handleData();
  }, []);

  return {
    isLoading,
    data,
    setCelebrationAccordion,
    celebrationAccordion,
    setSearch,
    search,
  };
};
