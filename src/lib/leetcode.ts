export type LeetCodeStats = {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
  contestRating: number | null;
  globalRanking: number | null;
  topPercentage: number | null;
};

// Static fallback matching Shivansh's actual numbers
const staticFallback: LeetCodeStats = {
  totalSolved: 272,
  easySolved: 112,
  mediumSolved: 135,
  hardSolved: 25,
  totalEasy: 820,
  totalMedium: 1620,
  totalHard: 860,
  contestRating: 1510,
  globalRanking: 320000,
  topPercentage: 25.5,
};

export async function getLeetcodeStats(username: string): Promise<LeetCodeStats> {
  try {
    const query = `
      query userProblemsSolved($username: String!) {
        allQuestionsCount {
          difficulty
          count
        }
        matchedUser(username: $username) {
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
        userContestRanking(username: $username) {
          attendedContestsCount
          rating
          globalRanking
          totalParticipants
          topPercentage
        }
      }
    `;

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) return staticFallback;

    const data = await response.json();

    if (data.errors || !data.data) {
      return staticFallback;
    }

    const { allQuestionsCount, matchedUser, userContestRanking } = data.data;

    if (!matchedUser || !matchedUser.submitStats) {
      return staticFallback;
    }

    const acSubmission = (matchedUser.submitStats.acSubmissionNum || []) as Array<{
      difficulty: string;
      count: number;
    }>;
    const totalSolved = acSubmission.find((item) => item.difficulty === "All")?.count ?? 0;
    const easySolved = acSubmission.find((item) => item.difficulty === "Easy")?.count ?? 0;
    const mediumSolved = acSubmission.find((item) => item.difficulty === "Medium")?.count ?? 0;
    const hardSolved = acSubmission.find((item) => item.difficulty === "Hard")?.count ?? 0;

    const questionsCount = (allQuestionsCount || []) as Array<{
      difficulty: string;
      count: number;
    }>;
    const totalEasy = questionsCount.find((item) => item.difficulty === "Easy")?.count ?? 820;
    const totalMedium = questionsCount.find((item) => item.difficulty === "Medium")?.count ?? 1620;
    const totalHard = questionsCount.find((item) => item.difficulty === "Hard")?.count ?? 860;

    return {
      totalSolved: totalSolved || staticFallback.totalSolved,
      easySolved: easySolved || staticFallback.easySolved,
      mediumSolved: mediumSolved || staticFallback.mediumSolved,
      hardSolved: hardSolved || staticFallback.hardSolved,
      totalEasy,
      totalMedium,
      totalHard,
      contestRating: userContestRanking?.rating ? Math.round(userContestRanking.rating) : staticFallback.contestRating,
      globalRanking: userContestRanking?.globalRanking ?? staticFallback.globalRanking,
      topPercentage: userContestRanking?.topPercentage ?? staticFallback.topPercentage,
    };
  } catch {
    return staticFallback;
  }
}
