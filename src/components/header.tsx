import { cn } from "@/lib/utils";
import { Container } from "./container";
import { MainRoutes } from "@/lib/helper";
import { NavLink } from "react-router-dom";
import { ProfileContainer } from "@/containers/profile-container";
import { ToggleContainer } from "@/containers/toggle-container";
import { useAuth } from "@clerk/clerk-react";

export const Header = () => {
  const { userId } = useAuth();

  return (
    <header
      className={cn("w-full border-b duration-150 transition-all ease-in-out")}
    >
      <Container>
        <div className="flex items-center gap-4">
          {/* logo section */}
          <span className="text-xl font-bold mr-4 md:mr-20">IntervieuAi</span>
          {/* nvigation section */}

          <nav className="hidden md:flex items-center gap-3">
            <ul className="flex items-center gap-6">

              <NavLink
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600",
                    isActive && "text-neutral-900 font-semibold"
                  )
                }
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600",
                    isActive && "text-neutral-900 font-semibold"
                  )
                }
                to={"/services"}
              >
                Services
              </NavLink>
              {userId && (
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      "text-base text-neutral-600",
                      isActive && "text-neutral-900 font-semibold"
                    )
                  }
                  to={"/prepare"}
                >
                  Prepare
                </NavLink>
              )

              }

              {userId && (
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      "text-base text-neutral-600",
                      isActive && "text-neutral-900 font-semibold"
                    )
                  }
                  to={"/generate"}
                >
                  Take an Interview
                </NavLink>
              )}
              <NavLink
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600",
                    isActive && "text-neutral-900 font-semibold"
                  )
                }
                to={"/about"}
              >
                About Us
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600",
                    isActive && "text-neutral-900 font-semibold"
                  )
                }
                to={"/contact"}
              >
                Contact Us
              </NavLink>
              

            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-6">
            {/* profile section */}
            <ProfileContainer />
            {/* toggle action */}
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};
